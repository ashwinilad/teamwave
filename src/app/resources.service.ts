import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getQuestions(masterUrl: string){
    return this.http.get(masterUrl, httpOptions);
  }
}
