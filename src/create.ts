import * as Phaser from "phaser";

import { initSpaceShip } from "./objects/spaceShip/initSpaceShip";
import { initStarSkyCreation } from "./objects/stars/initStarSkyCreation";
import { initKeyboardActionsAndGameAnimations } from "./objects/keyboardActionsAndGameAnimations/initKeyboardActionsAndGameAnimations";
import { renderRocketCounter } from "./objects/rocket/renderRocketCounter";
import { initAdditionalRocket } from "./objects/rocket/initAdditionalRocket";
import { initAsteroid } from "./objects/asteroid/initAsteroid";
import { initReloadIndicator } from "./objects/reloadIndicator/initReloadIndicator";
import { initHealthIndicator } from "./objects/healthIndicator/initHealthIndicator";
import { ASTEROID_INTERVAL } from "./constants/asteroidInterval";
import { ADDITIONAL_ROCKET_INTERVAL } from "./constants/additionalRocketInterval";
import { initHealthPotion } from "./objects/healthPotion/initHealthPotion";
import { HEALTH_POTION_INTERVAL } from "./constants/healthPotionInterval";
import { Sounds } from "./types/sounds";
import { renderScoreCounter } from "./objects/score/renderScoreCounter";

export function create(this: Phaser.Scene): void {
  this.sound.play(Sounds.BACKGROUND_MUSIC, { loop: true, volume: 0.1 });

  initSpaceShip.call(this);
  initStarSkyCreation.call(this);
  initKeyboardActionsAndGameAnimations.call(this);
  renderRocketCounter.call(this);
  renderScoreCounter.call(this);
  initReloadIndicator.call(this);
  initHealthIndicator.call(this);

  setInterval(() => {
    initHealthPotion.call(this);
  }, HEALTH_POTION_INTERVAL);

  initAsteroid.call(this);
  setInterval(() => {
    initAsteroid.call(this);
  }, ASTEROID_INTERVAL);

  setInterval(() => {
    initAdditionalRocket.call(this);
  }, ADDITIONAL_ROCKET_INTERVAL);
}
