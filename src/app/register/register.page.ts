import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    pass: ['', [Validators.required]],
    passRepit: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  register() {
    if (this.form.valid) {
      const { email, pass, passRepit } = this.form.getRawValue();
      console.log(email, pass, passRepit);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
