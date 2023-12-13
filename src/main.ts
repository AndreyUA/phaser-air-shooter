import "./style.css";

import * as Phaser from "phaser";

import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";
import { ScreenResolution } from "./types/screenResolution";

const config: Phaser.Types.Core.GameConfig = {
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
};

new Phaser.Game(config);
