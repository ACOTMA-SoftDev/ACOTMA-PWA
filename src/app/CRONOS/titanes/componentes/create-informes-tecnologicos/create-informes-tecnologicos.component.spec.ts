import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInformesTecnologicosComponent } from './create-informes-tecnologicos.component';

describe('CreateInformesTecnologicosComponent', () => {
  let component: CreateInformesTecnologicosComponent;
  let fixture: ComponentFixture<CreateInformesTecnologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInformesTecnologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInformesTecnologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
