import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
  constructor(private authService:AuthService) {
  }

  login(userForm: NgForm) {
    let data = userForm.value
    this.authService.login(data.email, data.password)
      .then(res=> console.log(res)).catch(err=> console.log(err))

  }


}
