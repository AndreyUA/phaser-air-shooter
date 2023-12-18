import * as Phaser from "phaser";

import { initSpaceShip } from "./objects/spaceShip/initSpaceShip";
import { initStarSkyCreation } from "./objects/stars/initStarSkyCreation";
import { initKeyboardActions } from "./objects/keyboardActions/initKeyboardActions";
import { renderRocketCounter } from "./objects/rocket/renderRocketCounter";

export function create(this: Phaser.Scene) {
  initSpaceShip.call(this);
  initStarSkyCreation.call(this);
  initKeyboardActions.call(this);
  renderRocketCounter.call(this);
}
