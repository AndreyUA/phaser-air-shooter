import * as Phaser from "phaser";

import { getRocketCounter, incrementRocketCounter } from "./rocketCounter";
import { renderRocketCounter } from "./renderRocketCounter";
import { reloadIndicator } from "../reloadIndicator/initReloadIndicator";
import { Sounds } from "../../types/sounds";

export function collectRocket(
  this: Phaser.Scene,
  additionalRocket: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
): void {
  additionalRocket.destroy();
  incrementRocketCounter();
  renderRocketCounter.call(this);
  this.sound.play(Sounds.RELOAD);

  if (getRocketCounter() === 1) {
    reloadIndicator?.startProgress();
  }
}
