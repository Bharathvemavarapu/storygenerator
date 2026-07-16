import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generator-flow',
  templateUrl: './generator-flow.component.html',
  styleUrls: ['./generator-flow.component.scss']
})
export class GeneratorFlowComponent {
  currentStep = 1;
  isGenerating = false;
  activeEngine: string = 'squibler';

  constructor(private router: Router) {}

  selectEngine(engine: string) {
    this.activeEngine = engine;
  }

  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  simulateGeneration() {
    this.isGenerating = true;
    setTimeout(() => {
      this.isGenerating = false;
      this.nextStep();
    }, 2500);
  }
}
