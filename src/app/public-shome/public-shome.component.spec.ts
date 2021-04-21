import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSHomeComponent } from './public-shome.component';

describe('PublicSHomeComponent', () => {
  let component: PublicSHomeComponent;
  let fixture: ComponentFixture<PublicSHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
