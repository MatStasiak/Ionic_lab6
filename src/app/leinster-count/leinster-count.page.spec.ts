import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeinsterCountPage } from './leinster-count.page';

describe('LeinsterCountPage', () => {
  let component: LeinsterCountPage;
  let fixture: ComponentFixture<LeinsterCountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeinsterCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
