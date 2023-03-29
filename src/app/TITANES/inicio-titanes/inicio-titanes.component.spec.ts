import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTitanesComponent } from './inicio-titanes.component';

describe('InicioTitanesComponent', () => {
  let component: InicioTitanesComponent;
  let fixture: ComponentFixture<InicioTitanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioTitanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioTitanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
