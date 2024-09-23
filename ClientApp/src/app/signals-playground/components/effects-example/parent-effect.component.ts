import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent-effect.component.html',
  styleUrl: './parent-effect.component.css'
})
export class ParentEffectComponent {
  selectedNumber = 0;

  generateRandom() {
    const random = Math.round(Math.random()*100);
    this.selectedNumber = random;
  }

  reset() {
    this.selectedNumber = 0;
  }
}
