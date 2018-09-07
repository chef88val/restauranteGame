import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerComponent } from './cooker.component';

describe('CookerComponent', () => {
  let component: CookerComponent;
  let fixture: ComponentFixture<CookerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
