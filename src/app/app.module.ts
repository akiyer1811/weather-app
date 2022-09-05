import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WatchlistComponent } from './Components/watchlist/watchlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    WatchlistComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', 
        component: MainPageComponent
      },
      {
        path:'watchlist',
         component: WatchlistComponent
      },
      {
        path:'register',
         component: RegisterComponent
      },
      {
        path:'login',
         component: LoginComponent
      }

    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
