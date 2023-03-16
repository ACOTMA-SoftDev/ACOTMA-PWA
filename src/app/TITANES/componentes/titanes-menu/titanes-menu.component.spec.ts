import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanesMenuComponent } from './titanes-menu.component';

describe('TitanesMenuComponent', () => {
  let component: TitanesMenuComponent;
  let fixture: ComponentFixture<TitanesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitanesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitanesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
