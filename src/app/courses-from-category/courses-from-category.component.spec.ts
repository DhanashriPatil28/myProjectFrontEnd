import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoursesFromCategoryComponent } from './courses-from-category.component';
import { CategoryService } from '../category.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('CoursesFromCategoryComponent', () => {
  let component: CoursesFromCategoryComponent;
  let fixture: ComponentFixture<CoursesFromCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        CategoryService,
      ],
    });
    TestBed.configureTestingModule({
      declarations: [ CoursesFromCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFromCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
