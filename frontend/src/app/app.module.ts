import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ContactComponent } from './contact/contact.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'episodes', component: EpisodesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EventsComponent,
    EpisodesComponent,
    ContactComponent,
    SocialmediaComponent,
    FooterComponent,
    AboutComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
