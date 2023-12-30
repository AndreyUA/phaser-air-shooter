import { getScoreCounter } from "../score/scoreCounter";

export const calculateAsteroidGravityY = (): number =>
  -250 * ((100 - getScoreCounter() * 2) / 100);
