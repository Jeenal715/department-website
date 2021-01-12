import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NextComponent } from './components/next/next.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { NewsAnnouncementsQuickLinksComponent } from './components/news-announcements-quick-links/news-announcements-quick-links.component';
import { NewComponent } from './components/new/new.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VisionMissionComponent } from './components/academic/vision-mission/vision-mission.component';
import { CalendarComponent } from './components/academic/calendar/calendar.component';
import { FdpsWorkshopComponent } from './research/fdps-workshop/fdps-workshop.component';
import { PublicationsComponent } from './research/publications/publications.component';
import { ResearchProjectsComponent } from './research/research-projects/research-projects.component';
import { CompleteFacultyComponent } from './complete-faculty/complete-faculty.component';
import { ComplaintComponent } from './student/complaint/complaint.component';
import { PlacementComponent } from './student/placement/placement.component';
import { CompaniesComponent } from './student/companies/companies.component';
import { ChildcomponentComponent } from './student/childcomponent/childcomponent.component';
import { TrialComponent } from './student/trial/trial.component';
import { TechComponent } from './student/tech/tech.component';
import {HttpModule} from '@angular/http';



var firebaseConfig = {
  apiKey: "AIzaSyCMd-acD_pJdfKQNoQpozjM-LvdXmYEVRA",
  authDomain: "firestore-572d2.firebaseapp.com",
  projectId: "firestore-572d2",
  storageBucket: "firestore-572d2.appspot.com",
  messagingSenderId: "909830858351",
  appId: "1:909830858351:web:cde1309dca5e5fc984cf9a",
  measurementId: "G-58W6KD5B6S"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NextComponent,
    InfrastructureComponent,
    NewsAnnouncementsQuickLinksComponent,
    NewComponent,
    FacultyComponent,
    FooterComponent,
    VisionMissionComponent,
    CalendarComponent,
    FdpsWorkshopComponent,
    PublicationsComponent,
    ResearchProjectsComponent,
    CompleteFacultyComponent,
    ComplaintComponent,
    PlacementComponent,

    CompaniesComponent,

    ChildcomponentComponent,

    TrialComponent,

    TechComponent,

  
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule ,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    TechComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
