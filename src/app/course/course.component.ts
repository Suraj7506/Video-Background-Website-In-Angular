import { LoadingService } from './../service/loading.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService, private http: HttpClient){}

  fetchUser() {
    this.http
      .get('https://api.github.com/users/thisiszoaib')
      .subscribe((res) => {
        console.log(res);
      });
  
    }

  ngOnInit(): void {
  }

}
