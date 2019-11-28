import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyPage } from './fantasy.page';

describe('FantasyPage', () => {
  let component: FantasyPage;
  let fixture: ComponentFixture<FantasyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
