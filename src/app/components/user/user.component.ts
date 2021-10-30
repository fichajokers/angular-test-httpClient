import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/api/users.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : Array<User> = []
  constructor(private usersService : UsersService) { }

  ngOnInit(): void { }

  getUsers(numberOfUsers : number){
    this.usersService.getUsers(numberOfUsers).subscribe(
      data =>{
        this.users = data.results
      },
      error =>{
        console.log( error )
      }
    )
  }
}
