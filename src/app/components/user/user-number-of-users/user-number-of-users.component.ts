import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-user-number-of-users',
  templateUrl: './user-number-of-users.component.html',
  styleUrls: ['./user-number-of-users.component.css']
})
export class UserNumberOfUsersComponent implements OnInit {
  //event to parent (user.component)
  @Output() numberOfUsersEmit = new EventEmitter<number>()

  formNumberOfUsers : any
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.formNumberOfUsers = this.fb.group({
      number : ['',Validators.required]
    })
  }

  submitFormNumberOfUsers(){
    console.log( this.formNumberOfUsers.value )
    //Create the emitter to send the numbers of users.
    this.numberOfUsersEmit.emit( this.formNumberOfUsers.value.number )
  }

  get number() { return this.formNumberOfUsers.get('number'); }
}
