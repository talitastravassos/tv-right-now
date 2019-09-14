import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingListComponent } from './up-coming-list.component';

describe('UpComingListComponent', () => {
  let component: UpComingListComponent;
  let fixture: ComponentFixture<UpComingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
