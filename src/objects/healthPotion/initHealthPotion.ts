import * as Phaser from "phaser";

import { calculateRandomXPosition } from "../../utils/calculateRandomXPosition";
import { GameObject } from "../../types/gameObjects";
import { player } from "../spaceShip/initSpaceShip";
import { pickUpHealthPotion } from "./pickUpHealthPotion";

let healthPoint: Phaser.Types.Physics.Arcade.ImageWithDynamicBody | null = null;

export function initHealthPotion(this: Phaser.Scene): void {
  if (healthPoint) {
    return;
  }

  healthPoint = this.physics.add
    .image(calculateRandomXPosition(), 25, GameObject.HEALTH_POTION)
    .setGravityY(-250)
    .setDepth(0)
    .setCollideWorldBounds(true);

  const worldBoundsHandler = (body: Phaser.Physics.Arcade.Body) => {
    if (body.gameObject === healthPoint) {
      healthPoint.body.world.off("worldbounds", worldBoundsHandler, this);
      healthPoint.destroy();
      healthPoint = null;
    }
  };
  healthPoint.body.onWorldBounds = true;
  healthPoint.body.world.on("worldbounds", worldBoundsHandler, this);

  this.physics.add.overlap(
    player,
    healthPoint,
    () => {
      setTimeout(() => {
        healthPoint = null;
      });

      return pickUpHealthPotion.call(this, healthPoint!);
    },
    undefined,
    this
  );
}
