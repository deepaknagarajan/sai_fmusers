import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmusersComponent } from './fmusers.component';

describe('FmusersComponent', () => {
  let component: FmusersComponent;
  let fixture: ComponentFixture<FmusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
