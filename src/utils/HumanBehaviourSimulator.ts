import { Page } from "puppeteer";

export class HumanBehaviorSimulator {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async simulateRandomBehavior() {
    const behaviors = [
      this.randomScroll.bind(this),
      this.moveMouseRandomly.bind(this),
      this.pauseRandomly.bind(this),
    ];

    // Choose a random number of actions to simulate
    const numActions = this.getRandomInt(2, 5);
    for (let i = 0; i < numActions; i++) {
      const action = behaviors[this.getRandomInt(0, behaviors.length)];
      await action();
    }
  }

  private async randomScroll() {
    const scrollSteps = this.getRandomInt(2, 5);

    for (let i = 0; i < scrollSteps; i++) {
      const scrollAmount = this.getRandomInt(100, 600);
      await this.page.evaluate((y) => {
        window.scrollBy(0, y);
      }, scrollAmount);
      // console.log(`Scrolled by ${scrollAmount}px`);
      await this.delay(this.getRandomInt(500, 1200));
    }
  }

  private async moveMouseRandomly() {
    const { width, height } = this.page.viewport() || { width: 1280, height: 800 };

    for (let i = 0; i < this.getRandomInt(3, 7); i++) {
      const x = this.getRandomInt(0, width);
      const y = this.getRandomInt(0, height);
      await this.page.mouse.move(x, y, { steps: this.getRandomInt(5, 15) });
      // console.log(`Moved mouse to (${x}, ${y})`);
      await this.delay(this.getRandomInt(100, 500));
    }
  }

  private async pauseRandomly() {    
    await this.delay(this.getRandomInt(1000, 3000));
    // console.log(`Paused for a random duration`);
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
