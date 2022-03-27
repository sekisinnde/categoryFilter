
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getAllCategories() {
    return this.http.get(this.rootURL + '/all-categories');
  }
  getVisibleCategories() {
    return this.http.get(this.rootURL + '/visible-categories');
  }


  addCategory(category: any) {
    return this.http.post(this.rootURL + '/categrories', {category});
  }

}
