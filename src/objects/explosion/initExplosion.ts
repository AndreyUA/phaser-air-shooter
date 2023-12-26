import * as Phaser from "phaser";
import { GameObject } from "../../types/gameObjects";
import { AnimationKeys } from "../../types/animationKeys";

export function initExplosion(
  this: Phaser.Scene,
  asteroid: Phaser.Types.Physics.Arcade.ImageWithDynamicBody,
  rocket?: Phaser.Physics.Arcade.Sprite | null
): void {
  if (!rocket) {
    return;
  }

  const explosion = this.physics.add
    .sprite(asteroid.x, asteroid.y, GameObject.EXPLOSION)
    .setDepth(100)
    .setGravityY(100);

  explosion.anims
    .play(AnimationKeys.EXPLODE, true)
    .on("animationcomplete", () => {
      explosion.destroy();
    });
}
