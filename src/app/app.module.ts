import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './landing/about/about.component';
import { LandingNavbarComponent } from './landing/landing-navbar/landing-navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

import { AuthGuardGuard } from './auth-guard.guard';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { PopupService } from './popup.service';

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EboardComponent } from './eboard/eboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent},
  { path: 'eboard', component: EboardComponent},
  { path: 'sponsors', component: SponsorsComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: '**', component: PageNotFoundComponent }
];

const firebaseConfig = {
  apiKey: 'AIzaSyDTBSJ0TYQvronrhwPZ7sQHrNLShZFgDQY',
  authDomain: 'ivoluntee.firebaseapp.com',
  databaseURL: 'https://ivoluntee.firebaseio.com',
  projectId: 'ivoluntee',
  storageBucket: '',
  messagingSenderId: '868622001028'
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    LandingNavbarComponent,
    PageNotFoundComponent,
    MainComponent,
    EboardComponent,
    ContactUsComponent,
    SponsorsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyDKjZJs2m4Fb4OuvXDumoGNrWniUcJZ4'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardGuard, HttpService, PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
