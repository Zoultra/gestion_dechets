import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChauffeurComponent } from './create-chauffeur.component';

describe('CreateChauffeurComponent', () => {
  let component: CreateChauffeurComponent;
  let fixture: ComponentFixture<CreateChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateChauffeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
