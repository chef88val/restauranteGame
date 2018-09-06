import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterComponent } from './waiter.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WaiterComponent', () => {
  let component: WaiterComponent;
  let fixture: ComponentFixture<WaiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
