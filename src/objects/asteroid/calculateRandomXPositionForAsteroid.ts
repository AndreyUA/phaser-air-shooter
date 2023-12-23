import { ScreenResolution } from "../../types/screenResolution";
import { calculateRandomXPosition } from "../../utils/calculateRandomXPosition";

export const calculateRandomXPositionForAsteroid = (): number => {
  const randomXPosition = calculateRandomXPosition();

  if (randomXPosition < 25) {
    return 25;
  }

  if (randomXPosition > ScreenResolution.WIDTH - 25) {
    return ScreenResolution.WIDTH - 25;
  }

  return randomXPosition;
};
