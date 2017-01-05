/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonstersComponent } from './monsters.component';

describe('MonstersComponent', () => {
  let component: MonstersComponent;
  let fixture: ComponentFixture<MonstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
