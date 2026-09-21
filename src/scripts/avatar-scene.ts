import {
  ACESFilmicToneMapping,
  AmbientLight,
  Box3,
  DirectionalLight,
  Euler,
  MathUtils,
  Object3D,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * The avatar scene: one rigged humanoid GLB framed chest-up, lit to match the
 * page (warm key, cool rim), with the head, neck and eyes easing toward the
 * pointer. Bones are found by name, which covers Mixamo-style rigs
 * (mixamorigHead) and MetaPerson exports (Head, Neck, LeftEye, RightEye).
 */

interface Rig {
  head?: Object3D;
  neck?: Object3D;
  eyes: Object3D[];
}

/** Radians the head turns at the edge of the pointer range. */
const HEAD_YAW_MAX = 0.42;
const HEAD_PITCH_MAX = 0.24;
/** The neck takes a share of the turn so the head does not swivel alone. */
const NECK_SHARE = 0.45;
/** Eyes lead the head, so they get extra travel of their own. */
const EYE_YAW_MAX = 0.28;
const EYE_PITCH_MAX = 0.16;
/** Per-frame easing toward the target: lower is lazier. */
const EASE = 0.09;
/** Camera framing relative to the model's height. */
const CAMERA_FOV = 24;
const CAMERA_DISTANCE = 0.85;
const CAMERA_LIFT = 0.02;
/** The head bone sits at the neck base, so the look target is nudged up toward the face. */
const LOOK_DROP = -0.02;
const MAX_PIXEL_RATIO = 2;

const findBone = (root: Object3D, pattern: RegExp): Object3D | undefined => {
  let found: Object3D | undefined;
  root.traverse((node) => {
    if (!found && pattern.test(node.name)) found = node;
  });
  return found;
};

function findRig(root: Object3D): Rig {
  const eyes: Object3D[] = [];
  root.traverse((node) => {
    if (/(left|right)eye$/i.test(node.name) || /eye_(l|r)$/i.test(node.name)) eyes.push(node);
  });
  return {
    head: findBone(root, /head$/i),
    neck: findBone(root, /neck$/i),
    eyes,
  };
}

function frameCamera(camera: PerspectiveCamera, model: Object3D, rig: Rig): void {
  const box = new Box3().setFromObject(model);
  const height = box.max.y - box.min.y;
  const head = rig.head
    ? rig.head.getWorldPosition(new Vector3())
    : new Vector3((box.min.x + box.max.x) / 2, box.max.y - height * 0.12, (box.min.z + box.max.z) / 2);
  const look = head.clone().add(new Vector3(0, -height * LOOK_DROP, 0));
  camera.position.set(head.x, head.y + height * CAMERA_LIFT, head.z + height * CAMERA_DISTANCE);
  camera.lookAt(look);
}

function addLights(scene: Scene): void {
  scene.add(new AmbientLight(0xffffff, 0.9));
  const key = new DirectionalLight(0xffe2bd, 2.4);
  key.position.set(-1.2, 1.6, 2.2);
  scene.add(key);
  const rim = new DirectionalLight(0x8ab4f8, 1.1);
  rim.position.set(1.6, 1.2, -1.4);
  scene.add(rim);
  const fill = new DirectionalLight(0xffffff, 0.5);
  fill.position.set(1.4, 0.4, 2.0);
  scene.add(fill);
}

export async function mountAvatar(host: HTMLElement, src: string): Promise<void> {
  const canvas = host.querySelector('canvas') ?? host.appendChild(document.createElement('canvas'));
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    host.dataset.avatarState = 'failed';
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;

  const scene = new Scene();
  const camera = new PerspectiveCamera(CAMERA_FOV, 1, 0.05, 50);
  addLights(scene);

  const gltf = await new GLTFLoader().loadAsync(src);
  const model = gltf.scene;
  // glTF models face +Z by convention; a model that does not can say so with data-rotate (degrees).
  model.rotation.y = MathUtils.degToRad(Number(host.dataset.rotate ?? 0));
  scene.add(model);
  scene.updateMatrixWorld(true);
  const rig = findRig(model);
  frameCamera(camera, model, rig);
  // Surfaced for verification: which bones were found and how the model measures.
  const bounds = new Box3().setFromObject(model);
  const headAt = rig.head?.getWorldPosition(new Vector3());
  host.dataset.rig = [rig.head?.name ?? '-', rig.neck?.name ?? '-', `${rig.eyes.length} eyes`].join(' | ');
  host.dataset.frame = [
    `h ${(bounds.max.y - bounds.min.y).toFixed(2)}`,
    `y ${bounds.min.y.toFixed(2)}..${bounds.max.y.toFixed(2)}`,
    headAt ? `head ${headAt.x.toFixed(2)},${headAt.y.toFixed(2)},${headAt.z.toFixed(2)}` : 'head -',
    `cam ${camera.position.x.toFixed(2)},${camera.position.y.toFixed(2)},${camera.position.z.toFixed(2)}`,
  ].join(' | ');

  const rest = new Map<Object3D, Euler>();
  for (const bone of [rig.head, rig.neck, ...rig.eyes]) {
    if (bone) rest.set(bone, bone.rotation.clone());
  }

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = matchMedia('(pointer: coarse)').matches;
  const target = { yaw: 0, pitch: 0 };
  const current = { yaw: 0, pitch: 0 };

  if (!coarsePointer && !reduceMotion) {
    window.addEventListener(
      'pointermove',
      (event) => {
        const rect = canvas.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height * 0.4;
        target.yaw = MathUtils.clamp((event.clientX - cx) / (window.innerWidth / 2), -1, 1);
        target.pitch = MathUtils.clamp((event.clientY - cy) / (window.innerHeight / 2), -1, 1);
      },
      { passive: true },
    );
  }

  const size = (): void => {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(size).observe(host);
  size();

  const pose = (yaw: number, pitch: number): void => {
    if (rig.head) {
      const base = rest.get(rig.head)!;
      rig.head.rotation.set(base.x + pitch * HEAD_PITCH_MAX * (1 - NECK_SHARE), base.y + yaw * HEAD_YAW_MAX * (1 - NECK_SHARE), base.z);
    }
    if (rig.neck) {
      const base = rest.get(rig.neck)!;
      rig.neck.rotation.set(base.x + pitch * HEAD_PITCH_MAX * NECK_SHARE, base.y + yaw * HEAD_YAW_MAX * NECK_SHARE, base.z);
    }
    for (const eye of rig.eyes) {
      const base = rest.get(eye)!;
      eye.rotation.set(base.x + pitch * EYE_PITCH_MAX, base.y + yaw * EYE_YAW_MAX, base.z);
    }
  };

  const started = performance.now();
  let visible = true;
  let frame = 0;

  const render = (): void => {
    frame = 0;
    const t = (performance.now() - started) / 1000;
    if (coarsePointer && !reduceMotion) {
      // No pointer to follow: a slow look-around, so the model still reads as live.
      target.yaw = Math.sin(t * 0.45) * 0.5;
      target.pitch = Math.sin(t * 0.31 + 1.2) * 0.25;
    }
    current.yaw += (target.yaw - current.yaw) * EASE;
    current.pitch += (target.pitch - current.pitch) * EASE;
    const breath = reduceMotion ? 0 : Math.sin(t * 1.1) * 0.03;
    pose(current.yaw, current.pitch + breath);
    renderer.render(scene, camera);
    if (host.dataset.avatarState !== 'ready') host.dataset.avatarState = 'ready';
    if (visible && !reduceMotion && document.visibilityState === 'visible') frame = requestAnimationFrame(render);
  };

  const wake = (): void => {
    if (!frame) frame = requestAnimationFrame(render);
  };
  new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? true;
    if (visible) wake();
  }).observe(host);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && visible) wake();
  });

  wake();
}
