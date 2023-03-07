import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIncidenciasComponent } from './card-incidencias.component';

describe('CardIncidenciasComponent', () => {
  let component: CardIncidenciasComponent;
  let fixture: ComponentFixture<CardIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
