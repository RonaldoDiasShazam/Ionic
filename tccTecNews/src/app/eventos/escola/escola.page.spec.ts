import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaPage } from './escola.page';

describe('EscolaPage', () => {
  let component: EscolaPage;
  let fixture: ComponentFixture<EscolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
