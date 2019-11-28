import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestuPage } from './vestu.page';

describe('VestuPage', () => {
  let component: VestuPage;
  let fixture: ComponentFixture<VestuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
