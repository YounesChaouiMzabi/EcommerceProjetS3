import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User | null>
  constructor(private afAuth:AngularFireAuth) {
    this.user = afAuth.user
  }

  signUp(email: string | undefined, password: string | undefined){
    return this.afAuth.createUserWithEmailAndPassword(<string>email,<string>password)
  }

  login(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password)

  }

  logout(){
    return this.afAuth.signOut()
  }
}
