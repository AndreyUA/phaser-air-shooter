import * as Phaser from "phaser";
import { updateHealthCounter } from "../healthIndicator/healthCounter";
import { Sounds } from "../../types/sounds";

export function pickUpHealthPotion(
  this: Phaser.Scene,
  healthPoint: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
): void {
  updateHealthCounter(5);
  healthPoint.destroy();
  this.sound.play(Sounds.HEAL);
}
