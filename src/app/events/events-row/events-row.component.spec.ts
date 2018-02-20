import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRowComponent } from './events-row.component';

describe('EventsRowComponent', () => {
  let component: EventsRowComponent;
  let fixture: ComponentFixture<EventsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
