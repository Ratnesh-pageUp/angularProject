import { TestBed } from '@angular/core/testing';

import { StyleUtilityService } from './style-utility.service';

describe('StyleUtilityService', () => {
  let service: StyleUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
