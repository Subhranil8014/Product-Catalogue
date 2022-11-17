import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedSearchComponent } from './logged-search.component';

describe('LoggedSearchComponent', () => {
  let component: LoggedSearchComponent;
  let fixture: ComponentFixture<LoggedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
