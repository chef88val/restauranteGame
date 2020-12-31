import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumComponent } from 'src/app/components/resum/resum.component';
import { Player } from 'src/app/class/player';
import { ApiDataService } from 'src/app/services/api-data.service';

describe('ResumComponent', () => {
  let component: ResumComponent;
  let fixture: ComponentFixture<ResumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('imput level', () => {
    component.level = 0;
    expect(component.level).toBe(0);
  });
  it('NOT imput level', () => {
    component.level = 1;
    expect(component.level).not.toBe(0);
  });
  it('imput player', () => {
    const p = new Player('', 0, false, '');
    component.player = p;
    expect(component.player).toBe(p);
  });
  it('ngOnInit', () => {
    expect(component.levelSelected).toEqual([]);
    component.ngOnInit();
    const levels = new ApiDataService().getLevels();
    expect(component.levelSelected).toEqual(levels);
  });
});
