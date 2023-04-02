import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach } from '@jest/globals';
import { describe } from '@jest/globals';
import { it } from '@jest/globals';
import { expect } from '@jest/globals';
import { InfTecnologicosComponent } from './inf-tecnologicos.component';

describe('InfTecnologicosComponent', () => {
  let component: InfTecnologicosComponent;
  let fixture: ComponentFixture<InfTecnologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfTecnologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfTecnologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
