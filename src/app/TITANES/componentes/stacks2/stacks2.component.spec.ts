import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stacks2Component } from './stacks2.component';

describe('Stacks2Component', () => {
  let component: Stacks2Component;
  let fixture: ComponentFixture<Stacks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stacks2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stacks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
