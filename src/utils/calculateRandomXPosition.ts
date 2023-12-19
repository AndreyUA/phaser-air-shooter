import * as Phaser from "phaser";

import { ScreenResolution } from "../types/screenResolution";

export const calculateRandomXPosition = (): number =>
  Phaser.Math.Between(0, ScreenResolution.WIDTH);
