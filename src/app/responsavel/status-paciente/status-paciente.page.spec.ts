import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusPacientePage } from './status-paciente.page';

describe('StatusPacientePage', () => {
  let component: StatusPacientePage;
  let fixture: ComponentFixture<StatusPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
