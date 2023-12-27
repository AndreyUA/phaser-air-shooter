import { setIsGameOver } from "../initGameOver/isGameOver";
import { healthIndicator } from "./initHealthIndicator";

let healthCounter: number = 100;

export const getHealthCounter = (): number => {
  return healthCounter;
};

export const updateHealthCounter = (healthDifference: number): number => {
  const futureResult = healthCounter + healthDifference;

  if (futureResult <= 0) {
    healthCounter = 0;
    healthIndicator?.smoothUpdate(0);

    setTimeout(() => {
      setIsGameOver();
    }, 500);

    return getHealthCounter();
  }

  if (futureResult > 100) {
    healthCounter = 100;
    healthIndicator?.smoothUpdate(1);

    return getHealthCounter();
  }

  healthCounter += healthDifference;
  healthIndicator?.smoothUpdate(healthCounter / 100);

  return getHealthCounter();
};
