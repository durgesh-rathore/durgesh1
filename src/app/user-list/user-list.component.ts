import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any;
  constructor(private users:UserService) {
    this.users.viewUser().subscribe(result=>
      {
        console.log("for view user");
        console.log(result);
        this.userList=result;
      })
   }

  ngOnInit(): void {
  }

}
