let scoreCounter: number = 0;

export const getScoreCounter = (): number => scoreCounter;

export const increaseScoreCounter = (): void => {
  scoreCounter++;
};
