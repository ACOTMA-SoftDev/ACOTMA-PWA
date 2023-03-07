import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInicioAdminComponent } from './header-inicio-admin.component';

describe('HeaderInicioAdminComponent', () => {
  let component: HeaderInicioAdminComponent;
  let fixture: ComponentFixture<HeaderInicioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInicioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
