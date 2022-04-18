import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _service:UserService) { }

  ngOnInit(): void {
  }
  cheackTokenHtml(){
    // return true;
    console.warn("your on navigation");
    return this._service.cheackToken();

  }
 SignOut(){
   localStorage.removeItem('token-jwt');

 }
}
