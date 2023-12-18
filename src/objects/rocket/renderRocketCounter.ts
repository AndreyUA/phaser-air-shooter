import * as Phaser from "phaser";
import { getRocketCounter } from "./rocketCounter";

let rocketCounterText: Phaser.GameObjects.Text | null = null;
const createRocketCounterText = (): string => `${getRocketCounter()} / 9`;

export function renderRocketCounter(this: Phaser.Scene): void {
  if (rocketCounterText) {
    rocketCounterText.setText(createRocketCounterText());

    return;
  }

  rocketCounterText = this.add.text(40, 10, createRocketCounterText(), {
    fontSize: "30px",
    fontStyle: "bold",
    color: "#ff0000",
  });
  rocketCounterText.setDepth(2);
}
