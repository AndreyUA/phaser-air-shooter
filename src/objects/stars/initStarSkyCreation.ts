import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { createRandomGravityValue } from "../../utils/createRandomGravityValue";
import { calculateRandomXPosition } from "../../utils/calculateRandomXPosition";
import { destroyStars } from "./destroyStars";

let imagesArray: Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody> = [];

export function initStarSkyCreation(this: Phaser.Scene) {
  // TODO: add restriction for numbers of stars because it might be too much
  const animate = () => {
    const bigStar = this.physics.add.image(
      calculateRandomXPosition(),
      0,
      GameObject.STAR_BIG
    );
    bigStar.setGravityY(createRandomGravityValue());
    bigStar.setDepth(-1);

    const mediumStar = this.physics.add.image(
      calculateRandomXPosition(),
      0,
      GameObject.STAR_MEDIUM
    );

    mediumStar.setGravityY(createRandomGravityValue());
    mediumStar.setDepth(-1);

    const smallStar = this.physics.add.image(
      calculateRandomXPosition(),
      0,
      GameObject.STAR_SMALL
    );

    smallStar.setGravityY(createRandomGravityValue());
    smallStar.setDepth(-1);

    imagesArray.push(bigStar, mediumStar, smallStar);
    imagesArray = destroyStars(imagesArray);
  };

  return setInterval(animate, 400);
}
