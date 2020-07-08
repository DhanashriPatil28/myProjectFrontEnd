import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddCourseComponent } from './add-course.component';
import { CategoryService } from '../category.service';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

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
      declarations: [ AddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle #isCollapsed6', () => {
   
    expect(component.isCollapsed6).toBe(false, 'off at first');
    component.saveCourse();
    expect(component.isCollapsed6).toBe(true, 'on after click');
    component.saveCourse();
    expect(component.isCollapsed6).toBe(false, 'off after second click');
  });

});
