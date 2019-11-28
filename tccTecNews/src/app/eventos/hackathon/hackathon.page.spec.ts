import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonPage } from './hackathon.page';

describe('HackathonPage', () => {
  let component: HackathonPage;
  let fixture: ComponentFixture<HackathonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
