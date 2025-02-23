import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoubelleComponent } from './list-poubelle.component';

describe('ListPoubelleComponent', () => {
  let component: ListPoubelleComponent;
  let fixture: ComponentFixture<ListPoubelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPoubelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPoubelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
