import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildsComponent } from './wilds.component';

describe('WildsComponent', () => {
  let component: WildsComponent;
  let fixture: ComponentFixture<WildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
