import * as Phaser from "phaser";
import { GameObject } from "../../types/gameObjects";
import { AnimationKeys } from "../../types/animationKeys";

export function initExplosion(
  this: Phaser.Scene,
  asteroid?: Phaser.Types.Physics.Arcade.ImageWithDynamicBody,
  sourceSprite?: Phaser.Physics.Arcade.Sprite | null
): void {
  if (!sourceSprite || !asteroid) {
    return;
  }

  const midPoint = {
    x: (asteroid.x + sourceSprite.x) / 2,
    y: (asteroid.y + sourceSprite.y) / 2,
  };

  const explosion = this.physics.add
    .sprite(midPoint.x, midPoint.y, GameObject.EXPLOSION)
    .setDepth(100)
    .setGravityY(100);

  explosion.anims
    .play(AnimationKeys.EXPLODE, true)
    .on("animationcomplete", () => {
      explosion.destroy();
    });
}
