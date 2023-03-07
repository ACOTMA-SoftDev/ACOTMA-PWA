import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVehiComponent } from './registro-vehi.component';

describe('RegistroVehiComponent', () => {
  let component: RegistroVehiComponent;
  let fixture: ComponentFixture<RegistroVehiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVehiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVehiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
