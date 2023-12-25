import * as Phaser from "phaser";

import { initSpaceShip } from "./objects/spaceShip/initSpaceShip";
import { initStarSkyCreation } from "./objects/stars/initStarSkyCreation";
import { initKeyboardActions } from "./objects/keyboardActions/initKeyboardActions";
import { renderRocketCounter } from "./objects/rocket/renderRocketCounter";
import { initAdditionalRocket } from "./objects/rocket/initAdditionalRocket";
import { initAsteroid } from "./objects/asteroid/initAsteroid";
import { initHorizontalProgressBar } from "./objects/progressBar/initHorizontalProgressBar";
import { initVerticalProgressBar } from "./objects/progressBar/initVerticalProgressBar";

export function create(this: Phaser.Scene): void {
  initSpaceShip.call(this);
  initStarSkyCreation.call(this);
  initKeyboardActions.call(this);
  renderRocketCounter.call(this);
  initHorizontalProgressBar.call(this);
  initVerticalProgressBar.call(this);

  initAsteroid.call(this);
  setInterval(() => {
    initAsteroid.call(this);
  }, 8_000);

  setInterval(() => {
    initAdditionalRocket.call(this);
  }, 1_000);
}
