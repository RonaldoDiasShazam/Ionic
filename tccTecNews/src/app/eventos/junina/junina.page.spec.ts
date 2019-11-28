import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuninaPage } from './junina.page';

describe('JuninaPage', () => {
  let component: JuninaPage;
  let fixture: ComponentFixture<JuninaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuninaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuninaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
