import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipeMedicaPage } from './equipe-medica.page';

describe('EquipeMedicaPage', () => {
  let component: EquipeMedicaPage;
  let fixture: ComponentFixture<EquipeMedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipeMedicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipeMedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
