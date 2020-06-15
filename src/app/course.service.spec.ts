import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CourseService } from './course.service';
import {Course} from './mycourse';

describe('CourseService', () => {
  let service: CourseService,
  httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers:[CourseService]
    });

    service = TestBed.get(CourseService);
    httpTestingController =  TestBed.get(HttpTestingController);
  });

  it('should get the data successful', () => {
    
    const dummyCourses: Course[] = [
      {"id":2,"name":"Java","description":"advanced"},
      {"id":3,"name":"Angular","description":"Frontend"},
      {"id":5,"name":"Python","description":"used in AI "}
    ];

    service.getCourses().subscribe(c => {
      
      expect(c.length).toBe(3);
      expect(c
        ).toEqual(dummyCourses);
    });

    const req = httpTestingController.expectOne(service._url);
    expect(req.request.method).toEqual('GET');
   
    });

  it('should add course and return it', () => {
    const newCourse: Course = {id:7, name:"Java", description:"Programming Language"};

    service.SaveCourse(newCourse).subscribe(
      data => expect(data).toEqual(newCourse,'ahould return the course'),
      fail
    );

    const req = httpTestingController.expectOne(service._url1);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newCourse);

  });

  it('should put the correct data', () => {
   
    const newCourse: Course = {id:3, name:"Java", description:"Programming Language"};

    service.UpdateCourse(newCourse).subscribe(
      data => expect(data).toEqual(newCourse,'ahould return the course'),
      fail
    );

    const req = httpTestingController.expectOne(service._url3);
    expect(req.request.method).toEqual('PUT');
  });

  it('should delete the correct data', () => {
    service.DeleteCourse(3).subscribe((data: any) => {
      expect(data).toBe(3);

      const req = httpTestingController.expectOne('http://localhost:8080/courses/delete/3');
      expect(req.request.method).toEqual('DELETE');

      req.flush(3);
    });
   
  });
});
