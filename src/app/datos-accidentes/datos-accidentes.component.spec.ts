import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAccidentesComponent } from './datos-accidentes.component';

describe('DatosAccidentesComponent', () => {
  let component: DatosAccidentesComponent;
  let fixture: ComponentFixture<DatosAccidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosAccidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAccidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
