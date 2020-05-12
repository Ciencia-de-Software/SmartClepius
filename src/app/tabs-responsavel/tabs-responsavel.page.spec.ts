import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsResponsavelPage } from './tabs-responsavel.page';

describe('TabsResponsavelPage', () => {
  let component: TabsResponsavelPage;
  let fixture: ComponentFixture<TabsResponsavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsResponsavelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsResponsavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
