import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsResponsavelPage } from './tabs-responsavel.page';

describe('TabsResponsavelPage', () => {
  let component: TabsResponsavelPage;
  let fixture: ComponentFixture<TabsResponsavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsResponsavelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsResponsavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
