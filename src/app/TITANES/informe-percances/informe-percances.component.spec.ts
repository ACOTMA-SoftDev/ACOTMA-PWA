import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformePercancesComponent } from './informe-percances.component';

describe('InformePercancesComponent', () => {
  let component: InformePercancesComponent;
  let fixture: ComponentFixture<InformePercancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformePercancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformePercancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
