import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoVehicularComponent } from './prestamo-vehicular.component';

describe('PrestamoVehicularComponent', () => {
  let component: PrestamoVehicularComponent;
  let fixture: ComponentFixture<PrestamoVehicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoVehicularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoVehicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
