import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  public headers: any;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }

  async getQuestions() {
    var param = window.location.pathname.split("/")[2];
    const response = await this.http.get('/questions/' + param).toPromise();
    return response;
  }
}
