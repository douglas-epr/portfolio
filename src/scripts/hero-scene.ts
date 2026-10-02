/**
 * Hero background and avatar. A drifting constellation on [data-constellation]
 * (nodes link when close, and link to the pointer on fine pointers), and the
 * looping avatar video on [data-hero-video]. Both run only while the hero is on
 * screen and the tab is visible; under reduced motion the network is drawn
 * once and the video holds its poster.
 */
const MIN_NODES = 24;
const MAX_NODES = 110;
const AREA_PER_NODE = 16000;
const LINK_REACH = 150;
const POINTER_REACH = 190;
const SPEED = 0.18;
const CYAN = '124, 200, 228';
const VIOLET = '155, 135, 245';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  tint: string;
}

export function nodeCount(width: number, height: number): number {
  return Math.min(MAX_NODES, Math.max(MIN_NODES, Math.round((width * height) / AREA_PER_NODE)));
}

export function linkAlpha(distance: number, reach: number): number {
  if (distance >= reach) return 0;
  return (1 - distance / reach) ** 1.6;
}

function spawn(width: number, height: number): Node[] {
  return Array.from({ length: nodeCount(width, height) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED * 2,
    vy: (Math.random() - 0.5) * SPEED * 2,
    r: 1 + Math.random() * 1.8,
    tint: Math.random() < 0.35 ? VIOLET : CYAN,
  }));
}

function step(nodes: Node[], width: number, height: number): Node[] {
  return nodes.map((n) => {
    const vx = n.x + n.vx < 0 || n.x + n.vx > width ? -n.vx : n.vx;
    const vy = n.y + n.vy < 0 || n.y + n.vy > height ? -n.vy : n.vy;
    return { ...n, x: n.x + vx, y: n.y + vy, vx, vy };
  });
}

function link(ctx: CanvasRenderingContext2D, ax: number, ay: number, bx: number, by: number, alpha: number, tint: string): void {
  ctx.strokeStyle = `rgba(${tint}, ${alpha})`;
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.stroke();
}

function draw(ctx: CanvasRenderingContext2D, nodes: Node[], pointer: { x: number; y: number } | null): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.lineWidth = 1;
  for (let i = 0; i < nodes.length; i += 1) {
    const a = nodes[i]!;
    for (let j = i + 1; j < nodes.length; j += 1) {
      const b = nodes[j]!;
      const alpha = linkAlpha(Math.hypot(a.x - b.x, a.y - b.y), LINK_REACH) * 0.45;
      if (alpha > 0.01) link(ctx, a.x, a.y, b.x, b.y, alpha, CYAN);
    }
    if (pointer) {
      const alpha = linkAlpha(Math.hypot(a.x - pointer.x, a.y - pointer.y), POINTER_REACH) * 0.7;
      if (alpha > 0.01) link(ctx, a.x, a.y, pointer.x, pointer.y, alpha, VIOLET);
    }
  }
  for (const n of nodes) {
    ctx.fillStyle = `rgba(${n.tint}, 0.18)`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r * 3.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(${n.tint}, 0.95)`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function startConstellation(canvas: HTMLCanvasElement, host: HTMLElement, reduce: boolean): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let width = 0;
  let height = 0;
  let nodes: Node[] = [];
  let pointer: { x: number; y: number } | null = null;
  let visible = false;
  let frame = 0;

  const resize = (): void => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes = spawn(width, height);
    draw(ctx, nodes, null);
  };

  const tick = (): void => {
    nodes = step(nodes, width, height);
    draw(ctx, nodes, pointer);
    frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
  };
  const resume = (): void => {
    if (!reduce && visible && !document.hidden && frame === 0) frame = requestAnimationFrame(tick);
  };

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry?.isIntersecting ?? false;
    resume();
  }).observe(canvas);
  document.addEventListener('visibilitychange', resume);

  if (reduce || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  host.addEventListener('pointermove', (event) => {
    const box = canvas.getBoundingClientRect();
    pointer = { x: event.clientX - box.left, y: event.clientY - box.top };
  });
  host.addEventListener('pointerleave', () => {
    pointer = null;
  });
}

function startAvatarVideo(video: HTMLVideoElement, reduce: boolean): void {
  if (reduce) {
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }
  // Autoplay can be refused (data saver, low power); the poster stays, which is the intended fallback.
  const play = (): void => {
    video.play().catch(() => undefined);
  };
  new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting && !document.hidden) play();
    else video.pause();
  }).observe(video);
}

export function initHeroScene(): void {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.querySelector<HTMLCanvasElement>('[data-constellation]');
  const host = canvas?.closest<HTMLElement>('[data-sc-stage]');
  if (canvas && host) startConstellation(canvas, host, reduce);

  const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
  if (video) startAvatarVideo(video, reduce);
}
