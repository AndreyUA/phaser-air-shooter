import { ROCKET_RELOAD_TIME } from "./constants/rocketReloadTime";
import { cursors } from "./objects/keyboardActions/initKeyboardActions";
import { initRocket } from "./objects/rocket/initRocket";
import { player } from "./objects/spaceShip/initSpaceShip";
import { AnimationKeys } from "./types/animationKeys";

let timer: number | null = null;

export function update(this: Phaser.Scene) {
  // ! Rocket fire
  if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
    if (!timer) {
      timer = Date.now();
      initRocket.call(this, player.x, player.y);
    }

    if (Date.now() - timer > ROCKET_RELOAD_TIME) {
      timer = Date.now();
      initRocket.call(this, player.x, player.y);
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
