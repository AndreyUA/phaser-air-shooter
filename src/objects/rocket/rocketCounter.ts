let rocketCounter: number = 9;

export const getRocketCounter = (): number => rocketCounter;

export const incrementRocketCounter = (): void => {
  if (rocketCounter === 9) {
    return;
  }

  rocketCounter++;
};

export const decrementRocketCounter = (): void => {
  if (rocketCounter === 0) {
    return;
  }

  rocketCounter--;
};
