import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { AnimationKeys } from "../../types/animationKeys";
import { ROCKET_Y_VELOCITY } from "../../constants/rocketYVelocity";
import { ROCKET_X_GRAVITY } from "../../constants/rocketXGravity";

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

  rocket.anims.play(AnimationKeys.FLY, true);
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
