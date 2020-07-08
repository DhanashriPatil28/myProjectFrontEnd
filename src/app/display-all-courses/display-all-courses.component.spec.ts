import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DisplayAllCoursesComponent } from './display-all-courses.component';
import { CategoryService } from '../category.service';

describe('DisplayAllCoursesComponent', () => {
  let component: DisplayAllCoursesComponent;
  let fixture: ComponentFixture<DisplayAllCoursesComponent>;

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
      declarations: [ DisplayAllCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isCollapsed).toBe(true, 'true while getting courses');
  });
});
