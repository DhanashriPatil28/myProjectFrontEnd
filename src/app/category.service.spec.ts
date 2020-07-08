import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { Category } from './category';

describe('CategoryService', () => {
  let service: CategoryService,
  dummyCourse: Category,
  dummyCourse1: Category,
  httpTestingController1: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CategoryService,
      ],
    });
    
    service = TestBed.inject(CategoryService);
    httpTestingController1 = TestBed.get(HttpTestingController);
    dummyCourse = new Category();
    dummyCourse1 = new Category();
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive all available categories', () => {
    
    const dummyCategories: String[] = [
     "Finance and Accounting","IT and Software","Marketing"
    ];

    service.getCat().subscribe(c => {
      
      expect(c.length).toBe(3);
      expect(c
        ).toEqual(dummyCategories);
    });

    const req = httpTestingController1.expectOne(service._url);
    expect(req.request.method).toEqual('GET');
   
    });

    it('should receive all available courses', () => {
    
      const dummyCourses: String[] = [
       "Java","Python","Web Development"
      ];
  
      service.getCourses().subscribe(c => {
        
        expect(c.length).toBe(3);
        expect(c
          ).toEqual(dummyCourses);
      });
  
      const req = httpTestingController1.expectOne(service._url1);
      expect(req.request.method).toEqual('GET');
     
      });

      it('should receive all available courses from selected category', () => {
    
        const dummyCourses: String[] = [
         "Java","Python","Web Development"
        ];
    
        service.getCoursesFromCategory("IT and Software").subscribe(c => {
          
          expect(c.length).toBe(3);
          expect(c
            ).toEqual(dummyCourses);
        });
    
        const req = httpTestingController1.expectOne(service._url2 + "IT and Software");
        expect(req.request.method).toEqual('GET');
       
        });

         it('should add course and return it', () => {
          const newCourse: Category = {id:31,categoryName:"IT and Software",courseName:"Python",courseRequirements:"ghj",courseDescription:"ggghhggff",courseContents:"xyzqwghhgherty"};
            
          service.SaveCourse(newCourse).subscribe(
              data => expect(data).toEqual(newCourse),
            );
        
            const req = httpTestingController1.expectOne(service._url4);
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual(newCourse);
           
            });

            it('should put the correct data', () => {
   
              const newCourse: Category = {id:31,categoryName:"IT and Software",courseName:"Python",courseRequirements:"ghj",courseDescription:"ggghhggff",courseContents:"xyzqwghhgherty"};

          
              service.UpdateCourse(newCourse).subscribe(
                data => expect(data).toEqual(newCourse),
                fail
              );
          
              const req = httpTestingController1.expectOne(service._url6 + "Python");
              expect(req.request.method).toEqual('PUT');
            });

        it('should receive the details of selected course', () => {
    
          const dummyCourse =  [
            {categoryName:"abc",courseName:"Java",courseRequirements:"xyz",courseDescription:"asdfgh",courseContents:"xyzqwerty"}
            
          ];
          service.GetCourseDetails("Java").subscribe(c => {
            
            expect(c.length).toBe(1);
            expect(c
              ).toEqual(this.dummyCourse);
          });
      
          const req = httpTestingController1.expectOne(service._url3 + "Java");
          expect(req.request.method).toEqual('GET');
         
          });


  it('should delete the correct data', () => {
    service.DeleteCourse("Java").subscribe((data: any) => {
      expect(data).toBe("Java");
      const req = httpTestingController1.expectOne('http://localhost:8080/categories/delete/Java');
      expect(req.request.method).toEqual('DELETE');
      req.flush(3);
    });

  });
});
