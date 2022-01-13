import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit {

  movie!: Movie;
  movieId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.movieId = Number(routeParams.get('idMovie'));
    this.service.getMovieById(this.movieId)
      .subscribe(movie => this.movie = movie)
  }

  getDate(dateFromApi: string){
    const arrayDate = dateFromApi.split('-')
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
  }

  goBackHome(){
    this.router.navigateByUrl('/home');
  }

}
