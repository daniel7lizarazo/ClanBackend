import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUbicacionesComponent } from './registrar-ubicaciones.component';

describe('RegistrarUbicacionesComponent', () => {
  let component: RegistrarUbicacionesComponent;
  let fixture: ComponentFixture<RegistrarUbicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarUbicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
