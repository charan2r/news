import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = "https://newsapi.org/v2"

  constructor(private http: HttpClient) { }

  getTopHeadlines(category: string): Observable<any> {
    const url = `${this.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${environment.newsApiKey}`;
    return this.http.get<any>(url);
  }

  getArticleDetails(articleUrl: string): Observable<any> {
    return this.http.get<any>(articleUrl);
    }
}
