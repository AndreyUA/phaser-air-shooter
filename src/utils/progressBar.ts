import { ROCKET_RELOAD_TIME } from "../constants/rocketReloadTime";
import { getRocketCounter } from "../objects/rocket/rocketCounter";

export interface ProgressBarConfig {
  scene: Phaser.Scene;
  x: number;
  y: number;
  width: number;
  height: number;
}

export abstract class ProgressBar {
  progress: number = 1;
  background: Phaser.GameObjects.Graphics;
  bar: Phaser.GameObjects.Graphics;
  x: number;
  y: number;
  width: number;
  height: number;
  scene: Phaser.Scene;

  constructor(config: ProgressBarConfig) {
    const { scene, x, y, width, height } = config;

    this.bar = new Phaser.GameObjects.Graphics(scene);
    this.background = new Phaser.GameObjects.Graphics(scene);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scene = scene;

    scene.add.existing(this.background);
    scene.add.existing(this.bar);
  }

  public update(progress: number): void {
    if (progress < 0 || progress > 1) {
      return;
    }

    this.background.clear();
    this.background.fillStyle(0xffffff, 1);

    this.bar.clear();
    this.bar.fillStyle(0xff0000, 1);
  }

  public startProgress(): void {
    this.update(0);
    this.progress = 0;

    if (getRocketCounter() === 0) {
      return;
    }

    const interval = setInterval(() => {
      this.progress += 0.01;
      this.update(this.progress);

      if (this.progress > 1) {
        this.progress = 1;
        this.update(this.progress);

        clearInterval(interval);
      }
    }, ROCKET_RELOAD_TIME / 100);
  }
}
