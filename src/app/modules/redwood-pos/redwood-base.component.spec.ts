import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedwoodBaseComponent } from './redwood-base.component';

describe('RedwoodBaseComponent', () => {
  let component: RedwoodBaseComponent;
  let fixture: ComponentFixture<RedwoodBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedwoodBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedwoodBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
