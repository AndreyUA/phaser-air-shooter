import * as Phaser from "phaser";
import { getRocketCounter } from "./rocketCounter";
import { GameObject } from "../../types/gameObjects";

let rocketCounterText: Phaser.GameObjects.Text | null = null;
const createRocketCounterText = (): string => `${getRocketCounter()} / 9`;

export function renderRocketCounter(this: Phaser.Scene): void {
  if (rocketCounterText) {
    rocketCounterText.setText(createRocketCounterText());

    return;
  }

  rocketCounterText = this.add.text(10, 10, createRocketCounterText(), {
    fontSize: "26px",
    fontStyle: "bold",
    color: "#ff0000",
  });
  rocketCounterText.setDepth(2);

  this.add.image(120, 25, GameObject.ROCKET_COUNTER).setDepth(2);
}
