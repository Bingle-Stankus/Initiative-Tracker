import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUnitComponent } from './save-unit.component';

describe('SaveUnitComponent', () => {
  let component: SaveUnitComponent;
  let fixture: ComponentFixture<SaveUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveUnitComponent]
    });
    fixture = TestBed.createComponent(SaveUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
