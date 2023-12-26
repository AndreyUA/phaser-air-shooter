import { ReloadIndicator } from "./reloadIndicator";

export let reloadIndicator: ReloadIndicator | null = null;

export function initReloadIndicator(this: Phaser.Scene): void {
  reloadIndicator = new ReloadIndicator({
    scene: this,
    x: 12,
    y: 52,
    width: 130,
    height: 20,
  });

  reloadIndicator.update(1);
}
