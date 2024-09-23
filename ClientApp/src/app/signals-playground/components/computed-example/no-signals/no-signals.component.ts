import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-no-signals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './no-signals.component.html',
})
export class NoSignalsComponent {
  selectedNumber = 0;

  isDivisibleBy2 = true;

  isDivisibleBy3 = true;

  isDivisibleBy5 = true;

  generateRandom() {
    const random = Math.round(Math.random()*100);
    this.selectedNumber = random;
    
    this.selectedNumberChange();
  }

  reset() {
    this.selectedNumber = 0;
    this.selectedNumberChange();
  }

  selectedNumberChange() {
    this.calculateDivisions();
  }

  private calculateDivisions() {
    this.isDivisibleBy2 = this.selectedNumber%2 === 0;
    this.isDivisibleBy3 = this.selectedNumber%3 === 0;
    this.isDivisibleBy5 = this.selectedNumber%5 === 0;

    const count = signal(0);
    const doubleCount = computed(() => count() * 2);

    console.log(doubleCount());
  }
}
