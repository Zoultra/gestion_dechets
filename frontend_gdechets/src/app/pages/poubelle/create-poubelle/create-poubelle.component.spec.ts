import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoubelleComponent } from './create-poubelle.component';

describe('CreatePoubelleComponent', () => {
  let component: CreatePoubelleComponent;
  let fixture: ComponentFixture<CreatePoubelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePoubelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePoubelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
