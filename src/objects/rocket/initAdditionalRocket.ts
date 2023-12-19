import { calculateRandomValueBetween0And100 } from "../../utils/calculateRandomValueBetween0And100";
import { getRocketCounter } from "./rocketCounter";

// TODO: add additional rocket to the game and make it possible to collect it
export function initAdditionalRocket(): void {
  // ! 5% chance to add rocket if 8 rocket left
  if (
    getRocketCounter() === 8 &&
    calculateRandomValueBetween0And100() > 55 &&
    calculateRandomValueBetween0And100() <= 60
  ) {
    console.log("its time to add rocket!");
  }

  // ! 10% chance to add rocket if 7 rocket left
  if (
    getRocketCounter() === 7 &&
    calculateRandomValueBetween0And100() > 1 &&
    calculateRandomValueBetween0And100() <= 11
  ) {
    console.log("its time to add rocket!");
  }

  // ! 15% chance to add rocket if 6 rocket left
  if (
    getRocketCounter() === 6 &&
    calculateRandomValueBetween0And100() > 30 &&
    calculateRandomValueBetween0And100() <= 45
  ) {
    console.log("its time to add rocket!");
  }

  // ! 20% chance to add rocket if 5 rocket left
  if (
    getRocketCounter() === 5 &&
    calculateRandomValueBetween0And100() > 60 &&
    calculateRandomValueBetween0And100() <= 80
  ) {
    console.log("its time to add rocket!");
  }

  // ! 25% chance to add rocket if 4 rocket left
  if (
    getRocketCounter() === 4 &&
    calculateRandomValueBetween0And100() > 70 &&
    calculateRandomValueBetween0And100() <= 95
  ) {
    console.log("its time to add rocket!");
  }

  // ! 30% chance to add rocket if 3 rocket left
  if (
    getRocketCounter() === 3 &&
    calculateRandomValueBetween0And100() > 50 &&
    calculateRandomValueBetween0And100() <= 80
  ) {
    console.log("its time to add rocket!");
  }

  // ! 35% chance to add rocket if 2 rocket left
  if (
    getRocketCounter() === 2 &&
    calculateRandomValueBetween0And100() > 64 &&
    calculateRandomValueBetween0And100() <= 99
  ) {
    console.log("its time to add rocket!");
  }

  // ! 40% chance to add rocket if 1 rocket left
  if (
    getRocketCounter() === 1 &&
    calculateRandomValueBetween0And100() > 40 &&
    calculateRandomValueBetween0And100() <= 80
  ) {
    console.log("its time to add rocket!");
  }

  // ! 45% chance to add rocket if 0 rocket left
  if (
    getRocketCounter() === 0 &&
    calculateRandomValueBetween0And100() > 55 &&
    calculateRandomValueBetween0And100() <= 100
  ) {
    console.log("its time to add rocket!");
  }
}
