import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInmueblesComponent } from './registrar-inmuebles.component';

describe('RegistrarInmueblesComponent', () => {
  let component: RegistrarInmueblesComponent;
  let fixture: ComponentFixture<RegistrarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
