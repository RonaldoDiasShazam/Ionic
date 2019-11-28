import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontosPage } from './descontos.page';

describe('DescontosPage', () => {
  let component: DescontosPage;
  let fixture: ComponentFixture<DescontosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescontosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
