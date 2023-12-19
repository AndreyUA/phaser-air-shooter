import * as Phaser from "phaser";

export const calculateRandomValueBetween0And100 = (): number =>
  Phaser.Math.Between(0, 100);
