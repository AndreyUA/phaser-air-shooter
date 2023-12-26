import * as Phaser from "phaser";

import { initExplosion } from "../explosion/initExplosion";

export function asteroidExplosion(
  this: Phaser.Scene,
  asteroid: Phaser.Types.Physics.Arcade.ImageWithDynamicBody,
  rocket?: Phaser.Physics.Arcade.Sprite | null
): void {
  initExplosion.call(this, asteroid, rocket);
  asteroid.destroy();
  rocket?.destroy();
}
