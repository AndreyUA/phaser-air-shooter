import { cursors, player } from "./create";

export function update() {
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
