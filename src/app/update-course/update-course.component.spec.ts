import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UpdateCourseComponent } from './update-course.component';
import { CategoryService } from '../category.service';

describe('UpdateCourseComponent', () => {
  let component: UpdateCourseComponent;
  let fixture: ComponentFixture<UpdateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CategoryService,
      ],
    });
    TestBed.configureTestingModule({
      declarations: [ UpdateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle #isCollapsed6', () => {
   
    expect(component.isCollapsed6).toBe(false, 'off at first');
    component.updateCourse();
    expect(component.isCollapsed6).toBe(true, 'on after click');
    component.updateCourse();
    expect(component.isCollapsed6).toBe(false, 'off after second click');
  });

});
