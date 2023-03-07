import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAsignacionComponent } from './header-asignacion.component';

describe('HeaderAsignacionComponent', () => {
  let component: HeaderAsignacionComponent;
  let fixture: ComponentFixture<HeaderAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
