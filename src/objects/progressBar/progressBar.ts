import { ROCKET_RELOAD_TIME } from "../../constants/rocketReloadTime";
import { getRocketCounter } from "../rocket/rocketCounter";

interface ProgressBarConfig {
  scene: Phaser.Scene;
  x: number;
  y: number;
  width: number;
  height: number;
}

export class ProgressBar {
  progress: number = 1;
  background: Phaser.GameObjects.Graphics;
  bar: Phaser.GameObjects.Graphics;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(config: ProgressBarConfig) {
    const { scene, x, y, width, height } = config;

    this.bar = new Phaser.GameObjects.Graphics(scene);
    this.background = new Phaser.GameObjects.Graphics(scene);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    scene.add.existing(this.background);
    scene.add.existing(this.bar);
  }

  public updateHorizontal(progress: number): void {
    if (progress < 0 || progress > 1) {
      return;
    }

    this.background.clear();
    this.background.fillStyle(0xffffff, 1);
    this.background.fillRect(this.x, this.y, this.width, this.height);

    this.bar.clear();
    this.bar.fillStyle(0xff0000, 1);
    this.bar.fillRect(this.x, this.y, this.width * progress, this.height);
  }

  public startHorizontalProgress(): void {
    this.updateHorizontal(0);
    this.progress = 0;

    if (getRocketCounter() === 0) {
      return;
    }

    const interval = setInterval(() => {
      this.progress += 0.01;
      this.updateHorizontal(this.progress);

      if (this.progress > 1) {
        this.progress = 1;
        this.updateHorizontal(this.progress);

        clearInterval(interval);
      }
    }, ROCKET_RELOAD_TIME / 100);
  }
}
