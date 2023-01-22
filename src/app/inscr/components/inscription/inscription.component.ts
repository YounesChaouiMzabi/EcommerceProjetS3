import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MyUser} from "../../Models/my-user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit{

  errorMessage:string=''
  constructor(private authService:AuthService, private us:UserService, private router:Router) {
  }


  ngOnInit(): void {
  }
  signUp(userForm: NgForm) {
    let data:MyUser = userForm.value
    this.authService.signUp(data.email,data.password)
      .then(res =>{
          this.errorMessage=''
          this.us.addUser(res.user?.uid,data.name,data.adress,data.telephone)
          this.router.navigate(['/products']);
        })
      .catch(err=>
      {
        this.errorMessage=err.message
      })
  }




}

