import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breadcumbs } from './breadcumbs';

describe('Breadcumbs', () => {
  let component: Breadcumbs;
  let fixture: ComponentFixture<Breadcumbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Breadcumbs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Breadcumbs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
