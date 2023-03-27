import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSreensComponent } from './map-sreens.component';

describe('MapSreensComponent', () => {
  let component: MapSreensComponent;
  let fixture: ComponentFixture<MapSreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
