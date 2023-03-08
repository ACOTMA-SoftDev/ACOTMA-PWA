import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioIncidenciasComponent } from './inicio-incidencias.component';

describe('InicioIncidenciasComponent', () => {
  let component: InicioIncidenciasComponent;
  let fixture: ComponentFixture<InicioIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
