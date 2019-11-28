import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina01Page } from './pagina01.page';

describe('Pagina01Page', () => {
  let component: Pagina01Page;
  let fixture: ComponentFixture<Pagina01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
