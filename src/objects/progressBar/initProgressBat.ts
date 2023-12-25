import { ProgressBar } from "./progressBar";

export let progressBar: ProgressBar | null = null;

export function initProgressBar(this: Phaser.Scene): void {
  progressBar = new ProgressBar({
    scene: this,
    x: 12,
    y: 52,
    width: 130,
    height: 20,
  });
}
