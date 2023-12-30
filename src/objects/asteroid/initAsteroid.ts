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
import { updateHealthCounter } from "../healthIndicator/healthCounter";
import { initExplosion } from "../explosion/initExplosion";
import { Sounds } from "../../types/sounds";
import { calculateAsteroidGravityY } from "./calculateAsteroidGravityY";

export let asteroid: Phaser.Types.Physics.Arcade.ImageWithDynamicBody | null =
  null;

export function initAsteroid(this: Phaser.Scene): void {
  // ! No more asteroids on the screen if we have one already
  if (getAsteroidCounter() > 0) {
    return;
  }

  const typeOfAsteroid =
    Phaser.Math.Between(1, 2) === 1
      ? GameObject.ASTEROID
      : GameObject.ASTEROID_BIG;

  // ! Add asteroid to the game
  asteroid = this.physics.add
    .image(calculateRandomXPositionForAsteroid(), 25, typeOfAsteroid)
    .setGravityY(calculateAsteroidGravityY())
    .setDepth(0)
    .setCollideWorldBounds(true);

  // ! Set asteroid rotation
  asteroid.body.setAngularVelocity(80);

  // ! Increment asteroid counter
  incrementAsteroidCounter();

  // ! Word bounds handler
  const worldBoundsHandler = (body: Phaser.Physics.Arcade.Body) => {
    if (body.gameObject === asteroid) {
      asteroid.body.world.off("worldbounds", worldBoundsHandler, this);
      asteroid.destroy();
      decrementAsteroidCounter();
      asteroid = null;
      this.sound.play(Sounds.MISSED_ASTEROID_ALARM);
      updateHealthCounter(-10);
    }
  };
  // ! Set world bounds
  asteroid.body.onWorldBounds = true;
  // ! Add world bounds handler
  asteroid.body.world.on("worldbounds", worldBoundsHandler, this);

  // ! Add overlap between player and asteroid
  this.physics.add.overlap(
    player,
    asteroid,
    () => {
      decrementAsteroidCounter();
      setTimeout(() => {
        asteroid = null;
      });
      updateHealthCounter(-25);
      initExplosion.call(this, asteroid!, player);
      this.sound.play(Sounds.EXPLOSION_PLAYER);

      return asteroidExplosion.call(this, asteroid!);
    },
    undefined,
    this
  );
}
