import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicriceComponent } from './organicrice.component';

describe('OrganicriceComponent', () => {
  let component: OrganicriceComponent;
  let fixture: ComponentFixture<OrganicriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
