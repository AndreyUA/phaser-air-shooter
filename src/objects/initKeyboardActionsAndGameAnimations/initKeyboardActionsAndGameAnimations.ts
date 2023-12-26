import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { AnimationKeys } from "../../types/animationKeys";

export let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

export function initKeyboardActionsAndGameAnimations(this: Phaser.Scene): void {
  if (this.input.keyboard) {
    cursors = this.input.keyboard.createCursorKeys();
  }

  this.anims.create({
    key: AnimationKeys.LEFT,
    frames: this.anims.generateFrameNumbers(GameObject.SPACE_SHIP, {
      start: 0,
      end: 0,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: AnimationKeys.TURN,
    frames: [{ key: GameObject.SPACE_SHIP, frame: 1 }],
    frameRate: 20,
  });
  this.anims.create({
    key: AnimationKeys.RIGHT,
    frames: this.anims.generateFrameNumbers(GameObject.SPACE_SHIP, {
      start: 2,
      end: 2,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: AnimationKeys.FLY,
    frames: this.anims.generateFrameNumbers(GameObject.ROCKET, {
      start: 0,
      end: 1,
    }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: AnimationKeys.EXPLODE,
    frames: this.anims.generateFrameNumbers(GameObject.EXPLOSION, {
      start: 0,
      end: 2,
    }),
    frameRate: 6,
    repeat: 0,
  });
}
