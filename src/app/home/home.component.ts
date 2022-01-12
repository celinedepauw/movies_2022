import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.search = new FormControl('');
  }

  onSubmit(){
    console.log('search = ' + this.search.value)
  }

}
