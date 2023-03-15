import { TestBed } from '@angular/core/testing';

import { InformeLimpiezaCrudService } from './informe-limpieza-crud.service';

describe('InformeLimpiezaCrudService', () => {
  let service: InformeLimpiezaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeLimpiezaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
