import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicfloursComponent } from './organicflours.component';

describe('OrganicfloursComponent', () => {
  let component: OrganicfloursComponent;
  let fixture: ComponentFixture<OrganicfloursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicfloursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicfloursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
