import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRepoComponent } from './course-repo.component';

describe('CourseRepoComponent', () => {
  let component: CourseRepoComponent;
  let fixture: ComponentFixture<CourseRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
