import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-training-home',
  templateUrl: './training-home.component.html',
  styleUrls: ['./training-home.component.scss']
})
export class TrainingHomeComponent implements OnInit {

  uploadedFiles: Array < File > ;
  public url: string = "/api/upload";

    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    fileChange(element) {
        this.uploadedFiles = element.target.files;
        console.log(this.uploadedFiles);
    }

    upload() {
        let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
            console.log(formData);
        }
        this.http.post(this.url, formData)
            .subscribe((response) => {
                console.log(response);
                alert("File Uploaded Successfully!");
            })
    }

}
