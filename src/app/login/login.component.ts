import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})


export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  public showLoginForm = true;

  constructor(private router: Router){ }

  ngOnInit(): void {}

  public onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.value.email === 'admin@admin.com' && this.loginForm.value.password === '12345') {
        const value = this.loginForm.value;
        console.log(value);
        // Almacenar información de usuario en localStorage
        localStorage.setItem('currentUser', JSON.stringify(value));
        // Navegar a la página de inicio si el usuario y contraseña son válidos
        this.router.navigate(['/home']);
        // Oculta el formulario una vez se valide
        this.showLoginForm = false;
      } else {
        const value = this.loginForm.value;
        console.log(value);
        alert('El usuario o la contraseña son incorrectos. Por favor, intente de nuevo.');
      }
    }
  }
  get emailField(){
    return this.loginForm.get('email');
  }

  get passwordField(){
    return this.loginForm.get('password');
  }
}
