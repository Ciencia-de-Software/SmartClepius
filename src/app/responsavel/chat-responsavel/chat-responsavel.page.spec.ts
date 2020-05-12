import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatResponsavelPage } from './chat-responsavel.page';

describe('ChatResponsavelPage', () => {
  let component: ChatResponsavelPage;
  let fixture: ComponentFixture<ChatResponsavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatResponsavelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatResponsavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
