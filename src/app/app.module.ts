import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DateComponent } from './menu/date.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  {path: 'home' , component : HomeComponent},
  {path: 'about' , component : AboutComponent},
  {path: 'date' , component : DateComponent},
  {path: 'home' , component : HomeComponent},
  {path: 'news' , component : NewsComponent},
  {path: 'contact' , component : ContactComponent},
  {path: 'notfound' , component : NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
