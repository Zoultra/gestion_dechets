import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePoubelleComponent } from './carte-poubelle.component';

describe('CartePoubelleComponent', () => {
  let component: CartePoubelleComponent;
  let fixture: ComponentFixture<CartePoubelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartePoubelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartePoubelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
