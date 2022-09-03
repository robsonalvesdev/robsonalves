import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseformationComponent } from './courseformation.component';

describe('CourseformationComponent', () => {
  let component: CourseformationComponent;
  let fixture: ComponentFixture<CourseformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
