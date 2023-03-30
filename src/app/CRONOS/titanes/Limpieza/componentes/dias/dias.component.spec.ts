import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach } from '@jest/globals';
import { describe } from '@jest/globals';
import { it } from '@jest/globals';
import { expect } from '@jest/globals';
import { DiasComponent } from './dias.component';

describe('DiasComponent', () => {
  let component: DiasComponent;
  let fixture: ComponentFixture<DiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});