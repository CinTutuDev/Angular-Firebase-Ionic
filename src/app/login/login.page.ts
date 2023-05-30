import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    pass: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  login() {
    if (this.form.valid) {
      const { email, pass } = this.form.getRawValue();
      console.log(email, pass);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
