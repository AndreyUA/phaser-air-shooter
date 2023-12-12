import { GameObject } from "./gameObjects";
import spaceShip from "/assets/spaceShip.png";
import starBig from "/assets/star-big.png";
import starMedium from "/assets/star-medium.png";
import starSmall from "/assets/star-small.png";

export async function preload(this: Phaser.Scene): Promise<void> {
  this.load.spritesheet(GameObject.SPACE_SHIP, spaceShip, {
    frameWidth: 48,
    frameHeight: 50,
  });

  this.load.image(GameObject.STAR_BIG, starBig);
  this.load.image(GameObject.STAR_MEDIUM, starMedium);
  this.load.image(GameObject.STAR_SMALL, starSmall);
}
