import { TestBed } from '@angular/core/testing';

import { PowerbaseService } from './powerbase.service';

describe('PowerbaseService', () => {
  let service: PowerbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
