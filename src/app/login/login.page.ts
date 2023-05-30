import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.fb.group({
    email : ['', [Validators.email, Validators.required]],
    pass : ['', [Validators.required]],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
