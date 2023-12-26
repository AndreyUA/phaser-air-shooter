import { ProgressBar, ProgressBarConfig } from "../../utils/progressBar";

export class ReloadIndicator extends ProgressBar {
  constructor(config: ProgressBarConfig) {
    super(config);
  }

  update(progress: number): void {
    super.update(progress);

    this.background.fillRect(this.x, this.y, this.width, this.height);
    this.bar.fillRect(this.x, this.y, this.width * progress, this.height);
  }
}
