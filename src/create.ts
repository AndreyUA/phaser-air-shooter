import * as Phaser from "phaser";

import { initSpaceShip } from "./objects/spaceShip/initSpaceShip";
import { initStarSkyCreation } from "./objects/stars/initStarSkyCreation";
import { initKeyboardActionsAndGameAnimations } from "./objects/initKeyboardActionsAndGameAnimations/initKeyboardActionsAndGameAnimations";
import { renderRocketCounter } from "./objects/rocket/renderRocketCounter";
import { initAdditionalRocket } from "./objects/rocket/initAdditionalRocket";
import { initAsteroid } from "./objects/asteroid/initAsteroid";
import { initHorizontalProgressBar } from "./objects/progressBar/initHorizontalProgressBar";
import { initVerticalProgressBar } from "./objects/progressBar/initVerticalProgressBar";
import { ASTEROID_INTERVAL } from "./constants/asteroidInterval";
import { ADDITIONAL_ROCKET_INTERVAL } from "./constants/additionalRocketInterval";

export function create(this: Phaser.Scene): void {
  initSpaceShip.call(this);
  initStarSkyCreation.call(this);
  initKeyboardActionsAndGameAnimations.call(this);
  renderRocketCounter.call(this);
  initHorizontalProgressBar.call(this);
  initVerticalProgressBar.call(this);

  initAsteroid.call(this);
  setInterval(() => {
    initAsteroid.call(this);
  }, ASTEROID_INTERVAL);

  setInterval(() => {
    initAdditionalRocket.call(this);
  }, ADDITIONAL_ROCKET_INTERVAL);
}
