import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEstudiantsComponent } from './administrar-estudiants.component';

describe('AdministrarEstudiantsComponent', () => {
  let component: AdministrarEstudiantsComponent;
  let fixture: ComponentFixture<AdministrarEstudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarEstudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarEstudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
