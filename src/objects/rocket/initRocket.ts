import * as Phaser from "phaser";
import { GameObject } from "../../types/gameObjects";

export function initRocket(
  this: Phaser.Scene,
  playerPositionX: number,
  playerPositionY: number
): void {
  const rocket = this.physics.add.image(
    playerPositionX,
    playerPositionY,
    GameObject.ROCKET
  );
}
