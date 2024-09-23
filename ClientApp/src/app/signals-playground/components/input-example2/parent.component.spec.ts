import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleComponent } from './parent.component';

describe('EffectsExample2Component', () => {
  let component: InputExampleComponent;
  let fixture: ComponentFixture<InputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
