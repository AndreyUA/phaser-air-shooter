import { HorizontalProgressBar } from "./horizontalProgressBar";

export let horizontalProgressBar: HorizontalProgressBar | null = null;

export function initHorizontalProgressBar(this: Phaser.Scene): void {
  horizontalProgressBar = new HorizontalProgressBar({
    scene: this,
    x: 12,
    y: 52,
    width: 130,
    height: 20,
  });

  horizontalProgressBar.update(1);
}
