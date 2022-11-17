import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandfilterComponent } from './brandfilter.component';

describe('BrandfilterComponent', () => {
  let component: BrandfilterComponent;
  let fixture: ComponentFixture<BrandfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
