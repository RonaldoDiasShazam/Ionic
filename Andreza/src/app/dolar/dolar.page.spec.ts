import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarPage } from './dolar.page';

describe('DolarPage', () => {
  let component: DolarPage;
  let fixture: ComponentFixture<DolarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
