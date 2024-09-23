import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class InputExampleComponent {
  selectedNumber = 0;

  generateRandom() {
    const random = Math.round(Math.random()*100);
    this.selectedNumber = random;
  }

  reset() {
    this.selectedNumber = 0;
  }
}
