import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  
  search(word: string): Observable<Movie[]>{
    if(word.length >= 3){
      return this.http
      .get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=841287cc6cdf6270894e2d9b9a2554e9&query=${word}`);  
    }
    return of([])   
  }
  

  getMovieById(id: number): Observable<Movie>{
    return this.http
      .get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=841287cc6cdf6270894e2d9b9a2554e9`);
  }
  
}
