import { GameObject } from "./gameObjects";
import spaceShip from "/assets/spaceShip.png";

export async function preload(this: Phaser.Scene): Promise<void> {
  this.load.spritesheet(GameObject.SPACE_SHIP, spaceShip, {
    frameWidth: 48,
    frameHeight: 50,
  });
}
