import { cursors } from "./objects/keyboardActions/initKeyboardActions";
import { initRocket } from "./objects/rocket/initRocket";
import { player } from "./objects/spaceShip/initSpaceShip";

let timer: number | null = null;
const RELOAD_TIME = 1_500;

export function update(this: Phaser.Scene) {
  // ! Rocket fire
  if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
    if (!timer) {
      timer = Date.now();
      initRocket.call(this, player.x, player.y);
    }

    if (Date.now() - timer > RELOAD_TIME) {
      timer = Date.now();
      initRocket.call(this, player.x, player.y);
    }
  }

  // ! Move left
  if (cursors.left.isDown) {
    player.setVelocityX(-360);
    // TODO: add move enum
    player.anims.play("left", true);
  }

  // ! Move right
  if (cursors.right.isDown) {
    player.setVelocityX(360);
    // TODO: add move enum
    player.anims.play("right", true);
  }

  // ! Stop
  if (cursors.left.isUp && cursors.right.isUp) {
    player.setVelocityX(0);
    // TODO: add move enum
    player.anims.play("turn");
  }
}
