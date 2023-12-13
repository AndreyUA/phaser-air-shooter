import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { ScreenResolution } from "../../types/screenResolution";

export function initRocket(
  this: Phaser.Scene,
  playerPositionX: number,
  playerPositionY: number
): void {
  const rocket = this.physics.add.image(
    playerPositionX,
    playerPositionY,
    GameObject.ROCKET
  );

  rocket.body.setGravityY(-10);
  rocket.body.setVelocityY(ScreenResolution.HEIGHT * -1.2);
  rocket.setDepth(0);

  const interval = setInterval(() => {
    if (rocket.y < 0) {
      clearInterval(interval);
      rocket.destroy();
    }
  }, 100);
}
