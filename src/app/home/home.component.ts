import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, startWith, Subject, switchMap, filter } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputSearch!: FormControl;

  movies: Movie[] = [];
  //movies!: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.inputSearch = new FormControl('');
    /*this.inputSearch.valueChanges.subscribe(response => {
      console.log('lettres : ', response)  
    })*/
  }


  searchMovie(word: string){
  //console.log(word)
  this.movieService.search(word)
    .subscribe((resp: any) => {
      console.log(resp.results)
      this.movies = resp.results
    })
  }

  goToMovie(id: number){
    this.router.navigateByUrl(`/movie/${id}`)
  }
}

/* comme dans tour of heroes : mais ne fonctionne pas 
export class HomeComponent implements OnInit {

  inputSearch!: FormControl;

  movies!: Observable<Movie[]>;
  private searchWords = new Subject<string>();

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


}
*/
