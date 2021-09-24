import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OraganiccerealsComponent } from './oraganiccereals.component';

describe('OraganiccerealsComponent', () => {
  let component: OraganiccerealsComponent;
  let fixture: ComponentFixture<OraganiccerealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OraganiccerealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OraganiccerealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
