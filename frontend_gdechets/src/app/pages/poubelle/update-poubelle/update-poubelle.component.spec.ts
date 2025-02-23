import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePoubelleComponent } from './update-poubelle.component';

describe('UpdatePoubelleComponent', () => {
  let component: UpdatePoubelleComponent;
  let fixture: ComponentFixture<UpdatePoubelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePoubelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePoubelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
