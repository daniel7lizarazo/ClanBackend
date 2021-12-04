import { TestBed } from '@angular/core/testing';

import { RegistrarUbicacionesService } from './registrar-ubicaciones.service';

describe('RegistrarUbicacionesService', () => {
  let service: RegistrarUbicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarUbicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
