let rocketCounter: number = 6;

export const getRocketCounter = (): number => rocketCounter;
export const incrementRocketCounter = (): void => {
  rocketCounter++;
};
export const decrementRocketCounter = (): void => {
  rocketCounter--;
};
