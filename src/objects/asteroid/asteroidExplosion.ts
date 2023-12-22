import * as Phaser from "phaser";

export function asteroidExplosion(
  this: Phaser.Scene,
  asteroid: Phaser.Types.Physics.Arcade.ImageWithDynamicBody,
  rocket?: Phaser.Physics.Arcade.Sprite | null
): void {
  asteroid.destroy();
  rocket?.destroy();
  // TODO: add explosion animation
}
