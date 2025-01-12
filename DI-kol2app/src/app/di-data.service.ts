import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DIDataService {

  private url = "https://kol2tai.herokuapp.com/"

  constructor(private http: HttpClient) { }

  getAllPosts(){
    return this.http.get(this.url + "api/forum/posts");
  }

  getPostById(id: string | null){
    return this.http.get(this.url + "api/forum/posts/" + id);
  }
}
