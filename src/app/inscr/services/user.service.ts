import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore) { }

  addUser(id: string | undefined, name: string | undefined, address: string | undefined, telephone: string | undefined){
    return this.fs.doc('users/'+id).set(Object.assign({},name,address,telephone)
    )
  }
}
