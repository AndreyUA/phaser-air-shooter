import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { player } from "../spaceShip/initSpaceShip";
import { asteroidExplosion } from "./asteroidExplosion";
import {
  decrementAsteroidCounter,
  getAsteroidCounter,
  incrementAsteroidCounter,
} from "./asteroidCounter";
import { calculateRandomXPositionForAsteroid } from "./calculateRandomXPositionForAsteroid";

export let asteroid: Phaser.Types.Physics.Arcade.ImageWithDynamicBody | null =
  null;

export function initAsteroid(this: Phaser.Scene): void {
  // ! No more asteroids on the screen if we have one already
  if (getAsteroidCounter() > 0) {
    return;
  }

  // TODO: for some reasons ASTEROID_BIG is not working
  const typeOfAsteroid =
    Phaser.Math.Between(1, 2) === 1
      ? GameObject.ASTEROID
      : GameObject.ASTEROID_BIG;
  // TODO: remove this
  console.log(
    "🚀 ~ file: initAsteroid.ts:24 ~ initAsteroid ~ typeOfAsteroid:",
    typeOfAsteroid
  );

  // ! Add asteroid to the game
  asteroid = this.physics.add
    .image(calculateRandomXPositionForAsteroid(), 25, typeOfAsteroid)
    .setGravityY(-250)
    .setDepth(0)
    .setCollideWorldBounds(true);

  // ! Set asteroid rotation
  asteroid.body.setAngularVelocity(80);

  // ! Increment asteroid counter
  incrementAsteroidCounter();

  // TODO: create util instead of copy-paste
  // ! Word bounds handler
  const worldBoundsHandler = (body: Phaser.Physics.Arcade.Body) => {
    if (body.gameObject === asteroid) {
      asteroid.body.world.off("worldbounds", worldBoundsHandler, this);
      asteroid.destroy();
      decrementAsteroidCounter();
      asteroid = null;
    }
  };
  // ! Set world bounds
  asteroid.body.onWorldBounds = true;
  // ! Add world bounds handler
  asteroid.body.world.on("worldbounds", worldBoundsHandler, this);
  // TODO: this is the end of copy-paste

  // ! Add overlap between player and asteroid
  this.physics.add.overlap(
    player,
    asteroid,
    () => {
      decrementAsteroidCounter();
      setTimeout(() => {
        asteroid = null;
      });
      return asteroidExplosion.call(this, asteroid!);
    },
    undefined,
    this
  );
}
