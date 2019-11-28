import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkePage } from './marke.page';

describe('MarkePage', () => {
  let component: MarkePage;
  let fixture: ComponentFixture<MarkePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
