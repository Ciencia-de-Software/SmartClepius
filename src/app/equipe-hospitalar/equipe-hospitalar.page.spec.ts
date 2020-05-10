import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipeHospitalarPage } from './equipe-hospitalar.page';

describe('EquipeHospitalarPage', () => {
  let component: EquipeHospitalarPage;
  let fixture: ComponentFixture<EquipeHospitalarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeHospitalarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipeHospitalarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
