import { GameObject } from "./gameObjects";
import airplane from "/assets/airplane.png";

export async function preload(this: Phaser.Scene): Promise<void> {
  this.load.spritesheet(GameObject.AIRPLANE, airplane, {
    frameWidth: 48,
    frameHeight: 50,
  });
}
