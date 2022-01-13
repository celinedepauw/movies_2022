import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, startWith, Subject, switchMap, filter, map } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputSearch!: FormControl;

  movies$!: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.inputSearch = new FormControl('');
    /*this.inputSearch.valueChanges.subscribe(response => {
      this.movieService.search(response)
      .subscribe((resp: any) => {
        console.log(resp.results)
        this.movies$ = resp.results
      })
    })*/
    this.movies$ = this.inputSearch.valueChanges.pipe(
      debounceTime(300),
      switchMap((word: string) => this.movieService.search(word)),
      map((response: any) => response.results)
    )
  }

  goToMovie(id: number){
    this.router.navigateByUrl(`/movie/${id}`)
  }
}

