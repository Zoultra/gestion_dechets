import { TestBed } from '@angular/core/testing';

import { PoubelleService } from './poubelle.service';

describe('PoubelleService', () => {
  let service: PoubelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoubelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
