import './scrollcraft.js';
import { initLedger } from './ledger';
import { initProjectDialog } from './project-dialog';
import { initContactForm } from './contact-form';
import { initYouTube } from './youtube';

function mountEngine(): void {
  window.ScrollCraft.mount(document.body);
}

// Line splitting measures real line boxes, so the engine mounts after fonts.
document.fonts.ready.then(mountEngine, mountEngine);

initLedger();
initProjectDialog();
initContactForm();
initYouTube();
