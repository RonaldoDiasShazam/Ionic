import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EadPage } from './ead.page';

describe('EadPage', () => {
  let component: EadPage;
  let fixture: ComponentFixture<EadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
