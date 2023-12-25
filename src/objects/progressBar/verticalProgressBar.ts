import { ProgressBar, ProgressBarConfig } from "./progressBar";

export class VerticalProgressBar extends ProgressBar {
  constructor(config: ProgressBarConfig) {
    super(config);
  }

  update(progress: number): void {
    super.update(progress);

    this.background.fillRect(this.x, this.y, this.width, this.height);
    this.bar.fillRect(
      this.x,
      this.y + this.height,
      this.width,
      -(this.height * progress)
    );
  }

  smoothUpdate(progress: number): void {
    this.update(progress);
  }
}
