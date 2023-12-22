import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { createRandomGravityValue } from "../../utils/createRandomGravityValue";
import { calculateRandomXPosition } from "../../utils/calculateRandomXPosition";
import { destroyStars } from "./destroyStars";

let imagesArray: Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody> = [];

export function initStarSkyCreation(this: Phaser.Scene): number {
  const animate = () => {
    if (imagesArray.length > 40) {
      imagesArray = destroyStars(imagesArray);

      return;
    }

    const bigStar = this.physics.add
      .image(calculateRandomXPosition(), 0, GameObject.STAR_BIG)
      .setGravityY(createRandomGravityValue())
      .setDepth(-1);

    const mediumStar = this.physics.add
      .image(calculateRandomXPosition(), 0, GameObject.STAR_MEDIUM)
      .setGravityY(createRandomGravityValue())
      .setDepth(-1);

    const smallStar = this.physics.add
      .image(calculateRandomXPosition(), 0, GameObject.STAR_SMALL)
      .setGravityY(createRandomGravityValue())
      .setDepth(-1);

    imagesArray.push(bigStar, mediumStar, smallStar);
    imagesArray = destroyStars(imagesArray);
  };

  return setInterval(animate, 400);
}
