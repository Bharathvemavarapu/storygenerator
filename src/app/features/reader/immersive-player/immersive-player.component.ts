import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-immersive-player',
  templateUrl: './immersive-player.component.html',
  styleUrls: ['./immersive-player.component.scss']
})
export class ImmersivePlayerComponent {
  currentParagraph = 0;
  isFlipping = false;
  progressPercentage = 15;

  paragraphs = [
    "You wake up in a cold, metallic room. The hum of machinery surrounds you. A voice echoes from an unseen speaker: 'Subject 42 is online.'",
    "Your head aches, and fragments of memory flicker—a blue sky, a loud crash, and then nothing. The room has no windows, only a heavy steel door and a small blinking console on the wall.",
    "A mechanical whir draws your attention. A small drone detaches from the ceiling and hovers at eye level. Its single red optical sensor scans you from head to toe.",
    "'Vitals stable,' it chirps in a synthetic tone. 'Beginning orientation protocol.' Before you can ask a question, the floor beneath you begins to shudder."
  ];

  nextParagraph() {
    if (this.currentParagraph < this.paragraphs.length - 1) {
      this.currentParagraph++;
      this.progressPercentage = Math.min(100, this.progressPercentage + 25);
    }
  }

  flipPage() {
    this.isFlipping = true;
    setTimeout(() => {
      this.isFlipping = false;
      this.currentParagraph = 0;
      this.progressPercentage = 30; // Mock progress jump for new page
    }, 800);
  }
}
