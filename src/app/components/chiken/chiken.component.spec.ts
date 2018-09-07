import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikenComponent } from './chiken.component';

describe('ChikenComponent', () => {
  let component: ChikenComponent;
  let fixture: ComponentFixture<ChikenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChikenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChikenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
