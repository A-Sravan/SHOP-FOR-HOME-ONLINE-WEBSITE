import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/common/user';

/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/**
 * If the data is valid return null else return an object
 */
function symbolValidator(control) { //control = registerForm.get('password')
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if (control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  tempuser = new User();

  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.tempuser);
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {
    console.log(this.registerForm.value);
    console.log(this.tempuser);
    this.tempuser.firstName = this.registerForm.value.name;
    this.tempuser.email = this.registerForm.value.email;
    this.tempuser.username = this.registerForm.value.username;
    this.tempuser.password = this.registerForm.value.password;
    this.http.post('http://localhost:8081/user/', this.tempuser).subscribe({
      next: data => {
        console.log(data);
        console.log("registered successfully!")
        alert("registered successfully!");
      },
      error: error => {
        console.log('There was an error!', error);
      }
    })
  }

}
