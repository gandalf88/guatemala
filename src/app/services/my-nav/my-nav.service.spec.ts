import { TestBed } from '@angular/core/testing';

import { MyNavService } from './my-nav.service';

describe('MyNavService', () => {
  let service: MyNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
