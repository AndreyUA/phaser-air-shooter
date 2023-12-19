import { GameObject } from "../../types/gameObjects";
import { calculateRandomXPosition } from "../../utils/calculateRandomXPosition";

export function createAdditionalRocket(this: Phaser.Scene): void {
  this.physics.add
    .image(calculateRandomXPosition(), 0, GameObject.ROCKET_COUNTER)
    .setGravityY(-250)
    .setDepth(0);
}
