import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomActions } from './bottom-actions';

describe('BottomActions', () => {
  let component: BottomActions;
  let fixture: ComponentFixture<BottomActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
