import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <style>
  .bg-company-red {
    background-color: #99D3DF !important;
    
}
li{
  padding-right:2vw;
}

</style>
  <nav class="navbar navbar-expand-lg  navbar-light fixed-top" style="background-color:#FDFEFE">
  <div class="container">
 
  <a class="navbar-brand" routerLink="/"><img width="20%" src="/assets/img/logo.jpg"></a>

  <button #navbarToggler class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" (click)="isShown = !isShown" [attr.aria-expanded]="isShown"  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 

  <div class="collapse navbar-collapse" [ngClass]="{ 'show': isShown }" id="navbarSupportedContent" >
    <ul class="navbar-nav navbar-center">
      <li class="nav-item active">
        <a class="nav-link" (click)="isShown = false" routerLink="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" (click)="isShown = false" routerLink="/faculty"  routerLinkActive="active">Faculty</a>
      </li>
      <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
    Academics
    </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#" routerLink="/vission-mission">Vision & Mission</a>
      <a class="dropdown-item" href="#" routerLink="/calendar">Calendars & TimeTables</a>
    
    </div>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
  Research & Events
  </a>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#" routerLink="/fdps">FDPS Workshops</a>

    <a class="dropdown-item" href="#" routerLink="/research-projects">Research Projects</a>
    <a class="dropdown-item" href="#" routerLink="/publications" >Publications</a>
  </div>
</li>
      <li class="nav-item">
      <a class="nav-link" (click)="isShown = false" routerLink="/infrastructure">Infrastructure</a>
    </li>
   
    
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
    Student Corner
  </a>

  <div class="dropdown-menu">
    <a class="dropdown-item" href="#" routerLink="/placement">Placement Buddy</a>
    <a class="dropdown-item"  routerLink="/tech">Latest Tech Trends</a>
    <a class="dropdown-item" routerLink="/complain">Complaint Box</a>
  </div>
</li>
    </ul>
    
  </div>
  </div>
</nav> 
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  isShown:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
