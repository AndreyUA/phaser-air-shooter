import "./style.css";

import * as Phaser from "phaser";
import VirtualJoystickPlugin from "phaser3-rex-plugins/plugins/virtualjoystick-plugin.js";

import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";
import { ScreenResolution } from "./types/screenResolution";

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: ScreenResolution.WIDTH,
  height: ScreenResolution.HEIGHT,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  plugins: {
    global: [
      {
        key: "rexVirtualJoystick",
        plugin: VirtualJoystickPlugin,
        start: true,
      },
    ],
  },
};

new Phaser.Game(config);
