import * as Phaser from "phaser";

import { GameObject } from "./gameObjects";

const createRandomGravityValue = () => Phaser.Math.Between(0.1, 1_000);
const calculateRandomXPosition = () => Phaser.Math.Between(0, 800);
const destroyStars = (
  stars: Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody>
): Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody> =>
  stars.filter((star) => {
    if (star.y > 600) {
      star.destroy();
    }

    return star.y < 600;
  });

let imagesArray: Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody> = [];

export function starSkyCreation(this: Phaser.Scene) {
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

  return setInterval(animate, 50);
}
