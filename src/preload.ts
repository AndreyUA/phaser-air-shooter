import { GameObject } from "./types/gameObjects";
import spaceShip from "/assets/spaceShip.png";
import starBig from "/assets/star-big.png";
import starMedium from "/assets/star-medium.png";
import starSmall from "/assets/star-small.png";
import rocket from "/assets/rocket.png";
import rocketCounter from "/assets/rocketCounter.png";
import asteroid from "/assets/asteroid.png";
import asteroidBig from "/assets/asteroidBig.png";
import explosion from "/assets/explosion.png";
import healthPotion from "/assets/additionalHealth.png";

export function preload(this: Phaser.Scene): void {
  this.load.spritesheet(GameObject.SPACE_SHIP, spaceShip, {
    frameWidth: 48,
    frameHeight: 50,
  });

  this.load.spritesheet(GameObject.ROCKET, rocket, {
    frameWidth: 48,
    frameHeight: 50,
  });

  this.load.spritesheet(GameObject.EXPLOSION, explosion, {
    frameWidth: 50,
    frameHeight: 50,
  });

  this.load.image(GameObject.STAR_BIG, starBig);
  this.load.image(GameObject.STAR_MEDIUM, starMedium);
  this.load.image(GameObject.STAR_SMALL, starSmall);
  this.load.image(GameObject.ROCKET_COUNTER, rocketCounter);
  this.load.image(GameObject.ASTEROID, asteroid);
  this.load.image(GameObject.ASTEROID_BIG, asteroidBig);
  this.load.image(GameObject.HEALTH_POTION, healthPotion);
}
