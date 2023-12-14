import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { ScreenResolution } from "../../types/screenResolution";

const FLY_ROCKET_ANIMATION = "fly";
const ROCKET_Y_VELOCITY = ScreenResolution.HEIGHT * -1.7;
const ROCKET_X_GRAVITY = 300;

export function initRocket(
  this: Phaser.Scene,
  playerPositionX: number,
  playerPositionY: number
): void {
  const rocket: Phaser.Physics.Arcade.Sprite = this.physics.add.sprite(
    playerPositionX,
    playerPositionY,
    GameObject.ROCKET
  );
  this.anims.create({
    key: FLY_ROCKET_ANIMATION,
    frames: this.anims.generateFrameNumbers(GameObject.ROCKET, {
      start: 0,
      end: 1,
    }),
    frameRate: 10,
    repeat: -1,
  });

  rocket.anims.play(FLY_ROCKET_ANIMATION, true);
  rocket.setGravityY(ROCKET_X_GRAVITY);
  rocket.setVelocityY(ROCKET_Y_VELOCITY);
  rocket.setDepth(0);

  const interval = setInterval(() => {
    if (rocket.y < 0) {
      clearInterval(interval);
      rocket.destroy();
    }
  }, 100);
}
