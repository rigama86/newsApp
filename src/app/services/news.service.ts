import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Article, NewsResponse } from '../interface/NewResponse.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  urlBase = 'https://newsapi.org/v2/top-headlines';

  constructor(private httpService: HttpClient) { }

  /**
   * @returns Top business headlines
   */
  getNewsTopBusinessHeadlines = ():Observable<Article[]> => {
    return this.httpService.get<NewsResponse>(`${this.urlBase}?country=us`,{
      params: { apiKey }
    }).pipe(
      map( resp => resp.articles )
    );
  }


  getTopHeadlinesCategory = (category: string): Observable<Article[]> => {
    return this.httpService.get<NewsResponse>(`${this.urlBase}?country=us&category=${category}`,{
      params: { apiKey }
    }).pipe(
      map( resp => resp.articles )
    );
  }
}
