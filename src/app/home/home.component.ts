import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, Subject, switchMap } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies!: Observable<Movie[]>;
  private searchWords = new Subject<string>();

  inputSearch!: FormControl;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.inputSearch = new FormControl('');
    this.movies = this.searchWords.pipe(
      debounceTime(300),
      switchMap((word: string) => this.movieService.search(word))
    )
  }

  search(word: string){
    this.searchWords.next(word);
  }

  /*
  searchMovie(word: string){
  //console.log(word)
  this.movieService.search(word)
    .subscribe(movies => this.movies = movies)
 }*/

}
