import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosAsignacionComponent } from './registros-asignacion.component';

describe('RegistrosAsignacionComponent', () => {
  let component: RegistrosAsignacionComponent;
  let fixture: ComponentFixture<RegistrosAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
