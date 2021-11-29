import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsuairosComponent } from './registrar-usuairos.component';

describe('RegistrarUsuairosComponent', () => {
  let component: RegistrarUsuairosComponent;
  let fixture: ComponentFixture<RegistrarUsuairosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarUsuairosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUsuairosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
