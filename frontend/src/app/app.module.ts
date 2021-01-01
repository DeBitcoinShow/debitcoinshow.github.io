import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BitcoinComponent } from './donate/bitcoin/bitcoin.component';
import { EuroComponent } from './donate/euro/euro.component';
import { LightningComponent } from './donate/lightning/lightning.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'episodes', component: EpisodesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'donate/bitcoin', component: BitcoinComponent},
  {path: 'donate/lightning', component: LightningComponent},
  {path: 'donate/euro', component: EuroComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EventsComponent,
    EpisodesComponent,
    SocialmediaComponent,
    FooterComponent,
    AboutComponent,
    QrcodeComponent,
    BitcoinComponent,
    EuroComponent,
    LightningComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    NgxQRCodeModule
  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
