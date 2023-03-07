import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIncidenciasComponent } from './header-incidencias.component';

describe('HeaderIncidenciasComponent', () => {
  let component: HeaderIncidenciasComponent;
  let fixture: ComponentFixture<HeaderIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIncidenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
