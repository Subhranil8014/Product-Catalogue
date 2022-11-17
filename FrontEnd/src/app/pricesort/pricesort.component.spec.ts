import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesortComponent } from './pricesort.component';

describe('PricesortComponent', () => {
  let component: PricesortComponent;
  let fixture: ComponentFixture<PricesortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
