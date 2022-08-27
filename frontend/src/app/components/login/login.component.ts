import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  successfulLogin: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  admin: boolean = false;
  passwordCorrect: boolean = false;
  ngOnInit() {
  }


  login() {
    console.log(this.model);
    outsidemodel = this.model;
    console.log(outsidemodel);
    this.http.get(`http://localhost:8081/user/${this.model.username}`).subscribe({
      next: data => {
        serverResponse = data;
        console.log(data);
        this.passwordCorrect = checkPassword();
        this.goToPage();
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }

  goToAdmin() {
    this.admin = true;
  }
  goToPage() {
    if (this.passwordCorrect === true && this.admin === true) {
      this.router.navigateByUrl("/admin");
      console.log(" admin logging");
    } else if (this.passwordCorrect === true && this.admin === false) {
      this.router.navigateByUrl("/products");
      console.log("user logging");
    }

  }

}
function checkPassword() {
  if (serverResponse === null) {
    alert("username or password is incorrect");
    return false;
  }
  else if (outsidemodel.password === serverResponse.password) {
    alert("logged in");
    return true;
  } else {
    alert("username or password is incorrect");
    return false;
  }
}
let outsidemodel: any = {};
let serverResponse: any = {};
