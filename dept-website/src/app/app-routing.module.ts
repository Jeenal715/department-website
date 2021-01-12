import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{NextComponent} from './components/next/next.component';
import{HomeComponent} from './components/home/home.component'
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { NewComponent } from './components/new/new.component';
import { VisionMissionComponent } from './components/academic/vision-mission/vision-mission.component';
import { CalendarComponent } from './components/academic/calendar/calendar.component';
import { FdpsWorkshopComponent } from './research/fdps-workshop/fdps-workshop.component';
import { PublicationsComponent } from './research/publications/publications.component';
import { ResearchProjectsComponent } from './research/research-projects/research-projects.component';
import { CompleteFacultyComponent } from './complete-faculty/complete-faculty.component';
import{ComplaintComponent} from './student/complaint/complaint.component'
import { PlacementComponent } from './student/placement/placement.component';
import { CompaniesComponent } from './student/companies/companies.component';
import { TrialComponent } from './student/trial/trial.component';
import { TechComponent } from './student/tech/tech.component';


const routes: Routes = [
  {path:'',
  pathMatch:'full',
component:HomeComponent},
{path:'tech',component:TechComponent},
{path:"list-of-companies",component:CompaniesComponent},
{path:'placement',component:PlacementComponent},
{path:'complain',component:ComplaintComponent},
  {path:'next',component:NextComponent},
  {path:'infrastructure',
component:InfrastructureComponent},
{path:'faculty',component:FacultyComponent},
{path:'new',component:NewComponent},
{path:'vission-mission',component:VisionMissionComponent},
{path:'calendar',component:CalendarComponent},
{path:'fdps',component:FdpsWorkshopComponent},
{path:'publications',component:PublicationsComponent},
{path:'research-projects',component:ResearchProjectsComponent},
{
  path:'complete-faculty',component:CompleteFacultyComponent
},
{ path: 'blog/:id', component:TrialComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
