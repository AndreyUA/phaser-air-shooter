import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";

export let player: Phaser.Physics.Arcade.Sprite;

export const initSpaceShip = function (this: Phaser.Scene): void {
  player = this.physics.add.sprite(400, 576, GameObject.SPACE_SHIP);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
};
