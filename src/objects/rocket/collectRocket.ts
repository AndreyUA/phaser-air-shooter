import * as Phaser from "phaser";

import { getRocketCounter, incrementRocketCounter } from "./rocketCounter";
import { renderRocketCounter } from "./renderRocketCounter";
import { progressBar } from "../progressBar/initHorizontalProgressBar";

export function collectRocket(
  this: Phaser.Scene,
  additionalRocket: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
): void {
  additionalRocket.destroy();
  incrementRocketCounter();
  renderRocketCounter.call(this);

  if (getRocketCounter() === 1) {
    progressBar?.startHorizontalProgress();
  }
}
