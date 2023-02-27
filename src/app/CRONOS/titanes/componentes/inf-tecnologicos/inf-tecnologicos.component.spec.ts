import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTecnologicosComponent } from './inf-tecnologicos.component';

describe('InfTecnologicosComponent', () => {
  let component: InfTecnologicosComponent;
  let fixture: ComponentFixture<InfTecnologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfTecnologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfTecnologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
