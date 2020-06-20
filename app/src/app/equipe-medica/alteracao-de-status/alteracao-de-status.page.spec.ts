import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlteracaoDeStatusPage } from './alteracao-de-status.page';

describe('AlteracaoDeStatusPage', () => {
  let component: AlteracaoDeStatusPage;
  let fixture: ComponentFixture<AlteracaoDeStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteracaoDeStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlteracaoDeStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
