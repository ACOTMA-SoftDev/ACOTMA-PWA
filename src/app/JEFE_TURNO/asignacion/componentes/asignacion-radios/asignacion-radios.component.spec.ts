import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRadiosComponent } from './asignacion-radios.component';

describe('AsignacionRadiosComponent', () => {
  let component: AsignacionRadiosComponent;
  let fixture: ComponentFixture<AsignacionRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionRadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
