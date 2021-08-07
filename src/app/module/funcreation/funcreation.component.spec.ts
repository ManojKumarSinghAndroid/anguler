import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncreationComponent } from './funcreation.component';

describe('FuncreationComponent', () => {
  let component: FuncreationComponent;
  let fixture: ComponentFixture<FuncreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
