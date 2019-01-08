import { Component } from '@angular/core';
import { DataService } from './data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Webservice';
  private result: Array<any>;
  private name: string;

  constructor(private dataService: DataService) {
    this.onLoad();
  }

  onAdd() {
    this.dataService.addCourses(this.name).subscribe(res => {
      console.log(res);
      this.onLoad();
    });
  }

  onDelete(name: string) {
    this.dataService.deleteCourses(name).subscribe(res => {
      console.log(res);
      this.onLoad();
    });
  }

  onLoad() {
    this.dataService.getCourses().subscribe(res => {
      console.log(res);
      this.result = res;
    });
  }
}
