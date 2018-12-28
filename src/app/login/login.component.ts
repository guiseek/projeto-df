import { Component, OnInit } from '@angular/core';
import { AuthService, AuthProfile, Profile } from '../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  private auth$: Observable<AuthProfile>;
  private auth$Sub: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        'pietra@munif.com.br', [Validators.required,Validators.email]
      ],
      password: [
        'qwe123', [Validators.required]
      ]
    });
  }

  ngOnInit() {
    this.authService.destroyAuth();
  }

  login() {
    this.auth$ = this.authService.login(
      this.loginForm.value
    );
    this.auth$Sub = this.auth$.subscribe(
      (response: AuthProfile) => {
        AuthService.$profile.next(
          Profile.fromJson(response)
        );
        this.router.navigateByUrl('/');
      },
      (error) => this.error = error.message)
  }
  ngOnDestroy() {
    if (this.auth$Sub) {
      console.log('this.auth: ', this.auth$Sub);
      this.auth$Sub.unsubscribe();
    }
  }
}
