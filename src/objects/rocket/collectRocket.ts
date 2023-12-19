import * as Phaser from "phaser";

import { incrementRocketCounter } from "./rocketCounter";
import { renderRocketCounter } from "./renderRocketCounter";

export function collectRocket(
  this: Phaser.Scene,
  additionalRocket: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
): void {
  additionalRocket.destroy();
  incrementRocketCounter();
  renderRocketCounter.call(this);
}
