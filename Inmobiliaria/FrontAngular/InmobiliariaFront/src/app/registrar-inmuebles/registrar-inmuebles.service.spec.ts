import { TestBed } from '@angular/core/testing';

import { RegistrarInmueblesService } from './registrar-inmuebles.service';

describe('RegistrarInmueblesService ', () => {
  let service: RegistrarInmueblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarInmueblesService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
