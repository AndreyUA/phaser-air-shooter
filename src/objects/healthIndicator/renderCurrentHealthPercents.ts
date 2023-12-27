import * as Phaser from "phaser";

import { getHealthCounter } from "./healthCounter";
import { ScreenResolution } from "../../types/screenResolution";

let currentHealthPercentsText: Phaser.GameObjects.Text | null = null;
const createCurrentHealthPercentsText = (): string => `${getHealthCounter()}%`;

export function renderCurrentHealthPercents(this: Phaser.Scene): void {
  if (currentHealthPercentsText) {
    currentHealthPercentsText.setText(createCurrentHealthPercentsText());

    if (getHealthCounter() < 10) {
      currentHealthPercentsText.setX(ScreenResolution.WIDTH - 40);
    }

    if (getHealthCounter() >= 10 && getHealthCounter() < 100) {
      currentHealthPercentsText.setX(ScreenResolution.WIDTH - 45);
    }

    if (getHealthCounter() >= 100) {
      currentHealthPercentsText.setX(ScreenResolution.WIDTH - 50);
    }

    return;
  }

  currentHealthPercentsText = this.add
    .text(
      ScreenResolution.WIDTH - 50,
      115,
      `${createCurrentHealthPercentsText()}`,
      {
        fontSize: "20px",
        color: "#ff0000",
      }
    )
    .setDepth(2);
}
