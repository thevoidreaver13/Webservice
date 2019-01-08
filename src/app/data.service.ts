import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  getCourses() {
    return this.http.get('/api/show').map(res => res.json().message);
  }

  addCourses(course: string) {
    const data = { name: course };
    return this.http.post('/api/add', data).map(res => res.json().message);
  }

  deleteCourses(course: string) {
    return this.http.delete('/api/delete/' + course).map(res => res.json().message);
  }
}
