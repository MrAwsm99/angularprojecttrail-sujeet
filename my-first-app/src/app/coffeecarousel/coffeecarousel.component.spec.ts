import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeecarouselComponent } from './coffeecarousel.component';

describe('CoffeecarouselComponent', () => {
  let component: CoffeecarouselComponent;
  let fixture: ComponentFixture<CoffeecarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeecarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
