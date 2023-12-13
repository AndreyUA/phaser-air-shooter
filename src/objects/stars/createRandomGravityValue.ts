import * as Phaser from "phaser";

export const createRandomGravityValue = () => Phaser.Math.Between(0.1, 1_000);
