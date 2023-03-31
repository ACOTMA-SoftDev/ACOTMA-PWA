import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccidentesComponent } from './all-accidentes.component';

describe('AllAccidentesComponent', () => {
  let component: AllAccidentesComponent;
  let fixture: ComponentFixture<AllAccidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAccidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAccidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
