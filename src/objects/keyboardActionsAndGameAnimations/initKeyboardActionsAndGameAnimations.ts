import * as Phaser from "phaser";
import VirtualJoystick from "phaser3-rex-plugins/plugins/virtualjoystick.js";

import { GameObject } from "../../types/gameObjects";
import { AnimationKeys } from "../../types/animationKeys";

export let cursors: Phaser.Types.Input.Keyboard.CursorKeys;
export let joystick: VirtualJoystick;

export function initKeyboardActionsAndGameAnimations(this: Phaser.Scene): void {
  if (this.input.keyboard) {
    cursors = this.input.keyboard.createCursorKeys();
  }

  // ! Joystick initialization
  joystick = new VirtualJoystick(this, {
    x: 50,
    y: 550,
    radius: 20,
    base: this.add.circle(0, 0, 20, 0x888888),
    thumb: this.add.circle(0, 0, 10, 0xcccccc),
  });

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
