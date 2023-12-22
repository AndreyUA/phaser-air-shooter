let asteroidCounter: number = 0;

export const getAsteroidCounter = (): number => asteroidCounter;

export const decrementAsteroidCounter = (): void => {
  asteroidCounter--;
};

export const incrementAsteroidCounter = (): void => {
  asteroidCounter++;
};
