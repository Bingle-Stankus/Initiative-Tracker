import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitComponent } from './update-unit.component';

describe('UpdateUnitComponent', () => {
  let component: UpdateUnitComponent;
  let fixture: ComponentFixture<UpdateUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUnitComponent]
    });
    fixture = TestBed.createComponent(UpdateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
