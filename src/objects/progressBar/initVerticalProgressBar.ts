import { ScreenResolution } from "../../types/screenResolution";
import { VerticalProgressBar } from "./verticalProgressBar";

export let verticalProgressBar: VerticalProgressBar | null = null;

export function initVerticalProgressBar(this: Phaser.Scene): void {
  verticalProgressBar = new VerticalProgressBar({
    scene: this,
    x: ScreenResolution.WIDTH - 30,
    y: 10,
    width: 20,
    height: 100,
  });

  verticalProgressBar.update(1);

  // TODO: remove this! For tests only!
  setTimeout(() => {
    verticalProgressBar?.smoothUpdate(0.5);
  }, 1_000);
}
