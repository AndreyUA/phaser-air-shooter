import { GameObject } from "../../types/gameObjects";
import { calculateRandomXPosition } from "../../utils/calculateRandomXPosition";
import { player } from "../spaceShip/initSpaceShip";
import { collectRocket } from "./collectRocket";

let additionalRocketCounter: number = 0;

export function createAdditionalRocket(this: Phaser.Scene): void {
  // ! Check available additional rockets on the screen
  if (additionalRocketCounter >= 2) {
    return;
  }

  // ! Increment additional rocket counter
  additionalRocketCounter++;

  // ! Add additional rocket to the game
  const additionalRocket = this.physics.add
    .image(calculateRandomXPosition(), 25, GameObject.ROCKET_COUNTER)
    .setGravityY(-250)
    .setDepth(0)
    .setCollideWorldBounds(true);

  // ! Word bounds handler
  const worldBoundsHandler = (body: Phaser.Physics.Arcade.Body) => {
    if (body.gameObject === additionalRocket) {
      additionalRocket.body.world.off("worldbounds", worldBoundsHandler, this);
      additionalRocket.destroy();
      additionalRocketCounter--;
    }
  };
  // ! Set world bounds
  additionalRocket.body.onWorldBounds = true;
  // ! Add world bounds handler
  additionalRocket.body.world.on("worldbounds", worldBoundsHandler, this);

  // ! Add overlap between player and additional rocket
  this.physics.add.overlap(
    player,
    additionalRocket,
    () => {
      additionalRocketCounter--;
      return collectRocket.call(this, additionalRocket);
    },
    undefined,
    this
  );
}
