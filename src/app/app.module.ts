import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { UserComponent } from './components/user/user.component';
import { UserNumberOfUsersComponent } from './components/user/user-number-of-users/user-number-of-users.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserInfoComponent,
    UserComponent,
    UserNumberOfUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
