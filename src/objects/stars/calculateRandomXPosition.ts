import * as Phaser from "phaser";

import { ScreenResolution } from "../../types/screenResolution";

export const calculateRandomXPosition = () =>
  Phaser.Math.Between(0, ScreenResolution.WIDTH);
