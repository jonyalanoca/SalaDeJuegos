import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LogComponent } from './components/log/log.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({ "projectId": "firecomplete-3cad5", "appId": "1:752699564240:web:e936a777842e9bd493bed5", "storageBucket": "firecomplete-3cad5.appspot.com", "apiKey": "AIzaSyAuj_IV4wdwIg2d_phGP02eHetDdyZe66s", "authDomain": "firecomplete-3cad5.firebaseapp.com", "messagingSenderId": "752699564240" }),
    // provideFirebaseApp(() => initializeApp({ "projectId": "firecomplete-3cad5", "appId": "1:752699564240:web:e936a777842e9bd493bed5", "storageBucket": "firecomplete-3cad5.appspot.com", "apiKey": "AIzaSyAuj_IV4wdwIg2d_phGP02eHetDdyZe66s", "authDomain": "firecomplete-3cad5.firebaseapp.com", "messagingSenderId": "752699564240" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
