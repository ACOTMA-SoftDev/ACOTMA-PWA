import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeDatosComponent } from './informe-datos.component';

describe('InformeDatosComponent', () => {
  let component: InformeDatosComponent;
  let fixture: ComponentFixture<InformeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
