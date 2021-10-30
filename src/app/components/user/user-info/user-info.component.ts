import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user : User | undefined
   
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(){}

  call(cell : string | undefined){
    console.log('call user 2')
  }

}
