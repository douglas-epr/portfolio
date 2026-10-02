import './scrollcraft.js';
import { initNav } from './nav';
import { initTranscript } from './transcript';
import { initProjectDialog } from './project-dialog';
import { initContactForm } from './contact-form';
import { initYouTube } from './youtube';
import { initHeroScene } from './hero-scene';
import { initStageFit } from './stage-fit';

function mountEngine(): void {
  window.ScrollCraft.mount(document.body);
}

// Line boxes are measured after the faces load.
document.fonts.ready.then(mountEngine, mountEngine);

initNav();
initTranscript();
initProjectDialog();
initContactForm();
initYouTube();
initHeroScene();
initStageFit();
