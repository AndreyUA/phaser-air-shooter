import * as Phaser from "phaser";

import { GameObject } from "../../types/gameObjects";
import { getScoreCounter } from "./scoreCounter";

let scoreRocketCounterText: Phaser.GameObjects.Text | null = null;
const createRocketCounterText = (): string => `${getScoreCounter()} points`;

export function renderScoreCounter(this: Phaser.Scene): void {
  if (scoreRocketCounterText) {
    scoreRocketCounterText.setText(createRocketCounterText());

    return;
  }

  scoreRocketCounterText = this.add
    .text(600, 10, createRocketCounterText(), {
      fontSize: "26px",
      fontStyle: "bold",
      color: "#ff0000",
    })
    .setDepth(2);

  this.add.image(120, 25, GameObject.ROCKET_COUNTER).setDepth(2);
}
