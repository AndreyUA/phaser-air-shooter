import * as Phaser from "phaser";

export function initGameOver(this: Phaser.Scene): void {
  this.add.text(230, 300, "Game over", {
    fontSize: "64px",
    color: "#ff0000",
  });
}
