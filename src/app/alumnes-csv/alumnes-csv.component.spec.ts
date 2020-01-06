import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnesCsvComponent } from './alumnes-csv.component';

describe('AlumnesCsvComponent', () => {
  let component: AlumnesCsvComponent;
  let fixture: ComponentFixture<AlumnesCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnesCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnesCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
