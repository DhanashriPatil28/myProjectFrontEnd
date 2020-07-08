import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CourseHomeComponent } from './course-home.component';

describe('CourseHomeComponent', () => {
  let component: CourseHomeComponent;
  let fixture: ComponentFixture<CourseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CourseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle #isCollapsed1', () => {
   
    expect(component.isCollapsed1).toBe(false, 'off at first');
    component.getCourses("Java");
    expect(component.isCollapsed1).toBe(true, 'on after click');
    component.getCourses("Java");
    expect(component.isCollapsed1).toBe(false, 'off after second click');
  });
 
  it('should true isCollapsed7', () => {
   
    expect(component.isCollapsed7).toBe(false, 'off at first');
    component.getCourses("Java");
    expect(component.isCollapsed7).toBe(true, 'on after click');
    component.getCourses("Java");
    expect(component.isCollapsed7).toBe(true, 'on after click');
  });

  it('should toggle #isCollapsed2', () => {
   
    expect(component.isCollapsed2).toBe(false, 'off at first');
    component.getCourseDetails("Java");
    expect(component.isCollapsed2).toBe(true, 'on after click');
    component.getCourseDetails("Java");
    expect(component.isCollapsed2).toBe(false, 'off after second click');
  });
  
});
