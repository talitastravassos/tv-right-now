import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringTodayListComponent } from './airing-today-list.component';

describe('AiringTodayListComponent', () => {
  let component: AiringTodayListComponent;
  let fixture: ComponentFixture<AiringTodayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiringTodayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiringTodayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
