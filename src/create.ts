import * as Phaser from "phaser";

import { GameObject } from "./gameObjects";

export let player: Phaser.Physics.Arcade.Sprite;
export let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

export function create(this: Phaser.Scene) {
  if (this.input.keyboard) {
    cursors = this.input.keyboard.createCursorKeys();
  }

  player = this.physics.add.sprite(400, 576, GameObject.AIRPLANE);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers(GameObject.AIRPLANE, {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "turn",
    frames: [{ key: GameObject.AIRPLANE, frame: 4 }],
    frameRate: 20,
  });
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers(GameObject.AIRPLANE, {
      start: 5,
      end: 8,
    }),
    frameRate: 10,
    repeat: -1,
  });
}
