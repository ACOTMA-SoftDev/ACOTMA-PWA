import { TestBed } from '@angular/core/testing';

import { UsuariosCrudService } from './usuarios-crud.service';

describe('UsuariosCrudService', () => {
  let service: UsuariosCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
