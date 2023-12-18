import * as Phaser from "phaser";

import { getRocketCounter } from "./rocketCounter";

const calculateRandomValue = () => Phaser.Math.Between(0, 100);

// TODO: add additional rocket to the game and make it possible to collect it
export function initAdditionalRocket(): void {
  // ! 5% chance to add rocket if 8 rocket left
  if (
    getRocketCounter() === 8 &&
    calculateRandomValue() > 55 &&
    calculateRandomValue() <= 60
  ) {
    console.log("its time to add rocket!");
  }

  // ! 10% chance to add rocket if 7 rocket left
  if (
    getRocketCounter() === 7 &&
    calculateRandomValue() > 1 &&
    calculateRandomValue() <= 11
  ) {
    console.log("its time to add rocket!");
  }

  // ! 15% chance to add rocket if 6 rocket left
  if (
    getRocketCounter() === 6 &&
    calculateRandomValue() > 30 &&
    calculateRandomValue() <= 45
  ) {
    console.log("its time to add rocket!");
  }

  // ! 20% chance to add rocket if 5 rocket left
  if (
    getRocketCounter() === 5 &&
    calculateRandomValue() > 60 &&
    calculateRandomValue() <= 80
  ) {
    console.log("its time to add rocket!");
  }

  // ! 25% chance to add rocket if 4 rocket left
  if (
    getRocketCounter() === 4 &&
    calculateRandomValue() > 70 &&
    calculateRandomValue() <= 95
  ) {
    console.log("its time to add rocket!");
  }

  // ! 30% chance to add rocket if 3 rocket left
  if (
    getRocketCounter() === 3 &&
    calculateRandomValue() > 50 &&
    calculateRandomValue() <= 80
  ) {
    console.log("its time to add rocket!");
  }

  // ! 35% chance to add rocket if 2 rocket left
  if (
    getRocketCounter() === 2 &&
    calculateRandomValue() > 64 &&
    calculateRandomValue() <= 99
  ) {
    console.log("its time to add rocket!");
  }

  // ! 40% chance to add rocket if 1 rocket left
  if (
    getRocketCounter() === 1 &&
    calculateRandomValue() > 40 &&
    calculateRandomValue() <= 80
  ) {
    console.log("its time to add rocket!");
  }

  // ! 45% chance to add rocket if 0 rocket left
  if (
    getRocketCounter() === 0 &&
    calculateRandomValue() > 55 &&
    calculateRandomValue() <= 100
  ) {
    console.log("its time to add rocket!");
  }
}
