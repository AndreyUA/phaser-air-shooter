import * as Phaser from "phaser";

import { ScreenResolution } from "../../types/screenResolution";

export const destroyStars = (
  stars: Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody>
): Array<Phaser.Types.Physics.Arcade.ImageWithDynamicBody> =>
  stars.filter((star) => {
    if (star.y > ScreenResolution.HEIGHT) {
      star.destroy();
    }

    return star.y < ScreenResolution.HEIGHT;
  });
