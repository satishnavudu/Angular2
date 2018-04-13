import { TestBed, inject } from '@angular/core/testing';

import { ProductGaurdServiceService } from './product-gaurd-service.service';

describe('ProductGaurdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGaurdServiceService]
    });
  });

  it('should be created', inject([ProductGaurdServiceService], (service: ProductGaurdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
