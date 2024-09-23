import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-no-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './getter.component.html',
})
export class GetterComponent {
  selectedNumber = 0;

  isDivisibleBy2 = () => {
    return this.selectedNumber %2 === 0
  }

  isDivisibleBy3 = () => {
    return this.selectedNumber%3 === 0
  }

  isDivisibleBy5 = () => {
    return this.selectedNumber%5 === 0
  }

  generateRandom() {
    const random = Math.round(Math.random()*100);
    this.selectedNumber = random;
  }

  reset() {
    this.selectedNumber = 0;
  }
}
