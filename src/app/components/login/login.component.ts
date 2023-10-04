import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from '../../services/api.service'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  form!: FormGroup
  isLoggedIn: boolean = false;
  isLoginPending: boolean = false
  hasLoginError: boolean = false

  ngOnInit(): void {
    this.isLoginPending = false
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    if (this.auth.getToken()) {
      this.isLoggedIn = true
    }
  }

  login() {
    this.auth.login(this.form.value).subscribe({
      next: (data) => this.isLoginPending = true,
      error: (error) => {
        this.hasLoginError = true
      },
      complete: () => {
        this.isLoggedIn = true
        this.router.navigate(['/'])
        window.location.reload()
      }
    })

    this.isLoginPending = false
  }
}
