import "./style.css";

import * as Phaser from "phaser";

import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
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

const game = new Phaser.Game(config);
