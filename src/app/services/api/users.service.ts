import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserResponse } from 'src/app/interfaces/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl : string = 'https://randomuser.me/api/'

  constructor(private http :HttpClient,private configService : ConfigService) { }

  getUsers(numberOfUsers : number) : Observable<UserResponse>{    
    return this.http.get<UserResponse>(`${this.baseUrl}/?results=${numberOfUsers}`)
      .pipe(
        catchError( this.configService.handleError )
      )
  }
}
