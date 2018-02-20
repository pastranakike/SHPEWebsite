import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsRowComponent } from './organizations-row.component';

describe('OrganizationsRowComponent', () => {
  let component: OrganizationsRowComponent;
  let fixture: ComponentFixture<OrganizationsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
