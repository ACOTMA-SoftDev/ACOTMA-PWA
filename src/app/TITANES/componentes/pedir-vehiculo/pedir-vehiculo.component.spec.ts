import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirVehiculoComponent } from './pedir-vehiculo.component';

describe('PedirVehiculoComponent', () => {
  let component: PedirVehiculoComponent;
  let fixture: ComponentFixture<PedirVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedirVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedirVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
