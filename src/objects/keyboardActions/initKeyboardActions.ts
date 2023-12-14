import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";

export let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

export function initKeyboardActions(this: Phaser.Scene) {
  if (this.input.keyboard) {
    cursors = this.input.keyboard.createCursorKeys();
  }

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers(GameObject.SPACE_SHIP, {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "turn",
    frames: [{ key: GameObject.SPACE_SHIP, frame: 1 }],
    frameRate: 20,
  });
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers(GameObject.SPACE_SHIP, {
      start: 2,
      end: 2,
    }),
    frameRate: 10,
    repeat: -1,
  });
}
