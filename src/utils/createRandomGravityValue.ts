import * as Phaser from "phaser";

export const createRandomGravityValue = (): number =>
  Phaser.Math.Between(-250, -200);
