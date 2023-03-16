import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasTecComponent } from './incidencias-tec.component';

describe('IncidenciasTecComponent', () => {
  let component: IncidenciasTecComponent;
  let fixture: ComponentFixture<IncidenciasTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasTecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
