import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.pattern('celine@hotmail.com')]),
      password: new FormControl('', [Validators.required, Validators.pattern('cinema')])
    })
  }

  onSubmit(){
    if(this.loginForm.value.login == 'celine@hotmail.com' && this.loginForm.value.password == 'cinema'){
      this.router.navigateByUrl('/home')
    }
  }

}
