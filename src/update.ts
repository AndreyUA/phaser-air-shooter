import { ROCKET_RELOAD_TIME } from "./constants/rocketReloadTime";
import { renderCurrentHealthPercents } from "./objects/healthIndicator/renderCurrentHealthPercents";
import { initGameOver } from "./objects/gameOver/initGameOver";
import { getIsGameOver } from "./objects/gameOver/isGameOver";
import {
  cursors,
  joystick,
} from "./objects/keyboardActionsAndGameAnimations/initKeyboardActionsAndGameAnimations";
import { reloadIndicator } from "./objects/reloadIndicator/initReloadIndicator";
import { initRocket } from "./objects/rocket/initRocket";
import { renderRocketCounter } from "./objects/rocket/renderRocketCounter";
import { getRocketCounter } from "./objects/rocket/rocketCounter";
import { player } from "./objects/spaceShip/initSpaceShip";
import { AnimationKeys } from "./types/animationKeys";
import { renderScoreCounter } from "./objects/score/renderScoreCounter";

let timer: number | null = null;

export function update(this: Phaser.Scene): void {
  renderCurrentHealthPercents.call(this);
  renderScoreCounter.call(this);

  if (getIsGameOver()) {
    initGameOver.call(this);
    this.scene.pause();

    return;
  }

  const angle = joystick.angle;

  // ! Move left with joystick
  if ((angle > -180 && angle < -90) || (angle > 90 && angle < 180)) {
    // TODO: why is it not working?
    console.log("move left");
    player.setVelocityX(-360);
    player.anims.play(AnimationKeys.LEFT, true);
  }

  // ! Move right with joystick
  if ((angle > -90 && angle < 0) || (angle > 0 && angle < 90)) {
    // TODO: why is it not working?
    console.log("move right");
    player.setVelocityX(360);
    player.anims.play(AnimationKeys.RIGHT, true);
  }

  // ! Rocket fire
  if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
    if (getRocketCounter() === 0) {
      return;
    }

    if (reloadIndicator?.progress !== 1) {
      return;
    }

    if (!timer) {
      timer = Date.now();
      initRocket.call(this, player.x, player.y);
      renderRocketCounter.call(this);
      reloadIndicator?.startProgress();
    }

    if (Date.now() - timer > ROCKET_RELOAD_TIME) {
      timer = Date.now();
      initRocket.call(this, player.x, player.y);
      renderRocketCounter.call(this);
      reloadIndicator?.startProgress();
    }
  }

  // ! Move left
  if (cursors.left.isDown) {
    player.setVelocityX(-360);
    player.anims.play(AnimationKeys.LEFT, true);
  }

  // ! Move right
  if (cursors.right.isDown) {
    player.setVelocityX(360);
    player.anims.play(AnimationKeys.RIGHT, true);
  }

  // ! Stop
  if (cursors.left.isUp && cursors.right.isUp) {
    player.setVelocityX(0);
    player.anims.play(AnimationKeys.TURN);
  }
}
