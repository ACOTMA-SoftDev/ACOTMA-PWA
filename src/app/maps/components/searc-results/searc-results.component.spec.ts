import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcResultsComponent } from './searc-results.component';

describe('SearcResultsComponent', () => {
  let component: SearcResultsComponent;
  let fixture: ComponentFixture<SearcResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
