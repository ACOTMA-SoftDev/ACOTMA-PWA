import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRadiosComponent } from './registro-radios.component';

describe('RegistroRadiosComponent', () => {
  let component: RegistroRadiosComponent;
  let fixture: ComponentFixture<RegistroRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroRadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
