import { ChangeDetectionStrategy, Component, computed, effect, Input, input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  
  selectedNumber = input(0); // new input syntax

  isDivisibleBy2 = computed(() => {
    return this.selectedNumber()%2 === 0
  })

  isDivisibleBy3 = computed(() => {
    return this.selectedNumber()%3 === 0
  })

  isDivisibleBy5 = computed(() => {
    return this.selectedNumber()%5 === 0
  })
}
