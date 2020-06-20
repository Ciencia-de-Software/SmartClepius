import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagensPage } from './messagens.page';

describe('MessagensPage', () => {
  let component: MessagensPage;
  let fixture: ComponentFixture<MessagensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
