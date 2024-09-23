import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './computed.component.html',
})
export class ComputedComponent {

  selectedNumber = signal(0);

  isDivisibleBy2 = computed(() => {
    return this.selectedNumber()%2 === 0
  })

  isDivisibleBy3 = computed(() => {
    return this.selectedNumber()%3 === 0
  })

  isDivisibleBy5 = computed(() => {
    return this.selectedNumber()%5 === 0
  })

  generateRandom() {
    const random = Math.round(Math.random()*100);
    this.selectedNumber.set(random);
  }

  reset() {
    this.selectedNumber.set(0);
  }
}
