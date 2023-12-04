import { cursors, player } from "./create";

let timer: number | null = null;
const RELOAD_TIME = 1_500;

export function update() {
  // ! Rocket fire
  // TODO: add rocket here
  if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
    if (!timer) {
      timer = Date.now();
      console.log("FIRE !!! ", new Date());
    }

    if (Date.now() - timer > RELOAD_TIME) {
      timer = Date.now();
      console.log("FIRE !!! ", new Date());
    }
  }

  // ! Move left
  if (cursors.left.isDown) {
    player.setVelocityX(-360);
  }

  // ! Move right
  if (cursors.right.isDown) {
    player.setVelocityX(360);
  }

  // ! Stop
  if (cursors.left.isUp && cursors.right.isUp) {
    player.setVelocityX(0);
  }
}
