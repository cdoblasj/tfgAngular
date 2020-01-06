import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouAlumneComponent } from './nou-alumne.component';

describe('NouAlumneComponent', () => {
  let component: NouAlumneComponent;
  let fixture: ComponentFixture<NouAlumneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouAlumneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouAlumneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
