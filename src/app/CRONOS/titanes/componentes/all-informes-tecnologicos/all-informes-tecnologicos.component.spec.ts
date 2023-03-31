import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInformesTecnologicosComponent } from './all-informes-tecnologicos.component';

describe('AllInformesTecnologicosComponent', () => {
  let component: AllInformesTecnologicosComponent;
  let fixture: ComponentFixture<AllInformesTecnologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInformesTecnologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInformesTecnologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
