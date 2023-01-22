import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../inscr/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      if(user)
        this.isUser=true;
      else
        this.isUser=false
    })
  }

  searchTerm: string | undefined;

  isUser:boolean = false

  constructor(private authService:AuthService) {
  }

  onSearchChange() {
    //const elements = this.elementRef.nativeElement.querySelectorAll(`:contains(${this.searchTerm})`);


  }

  logout() {
    this.authService.logout()
  }


}
