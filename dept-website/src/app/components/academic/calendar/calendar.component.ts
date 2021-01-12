import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: `
  <style>
  .jumbotron{
    background-color:white;
  }
  @media screen and (max-width: 425px) {
    .new  {
       margin-top:10vh !important;
       }
      
     }
     li a{
      color:white;
      text-decoration:underline;
     }
  </style>
  <br><br><br>
  <div class="jumbotron  new">
  <div class="container" style="background-color:   #93A7C4;;width:50vw">
  
  <h4 class="display-4 lead " style="text-align:center;color:#FFE2D9">CALENDARS</h4>
  <br><ul  class="list-unstyled lead" style="color:#FFE2D9">
   <li class="list-item"><a href="#">Btech I Year I Sem Academic Calendar</a>
   </li>
   <li class="list-item"><a href="#">Btech II Year I Sem  Academic Calendar</a>
   </li>
   <li class="list-item"><a href="#">Btech III Year I Sem Academic Calendar</a> 
   </li>
   <li class="list-item"><a href="#">Btech IV Year I Sem Academic Calendar</a>
   </li>
   </ul>
   </div>

     <div class="container" style="background-color: #AC467A;;width:50vw">
  
  <h4 class="display-4 lead " style="text-align:center;color:#FFE2D9">TIME-TABLES</h4>
  <br><ul  class="list-unstyled lead" style="color:#FFE2D9"><li>
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" style="background-color:white">
  Btech I Year
</button>
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Sec A</a>
  <a class="dropdown-item" href="#">Sec B</a>
  <a class="dropdown-item" href="#">Sec C</a>
</div></li>
<br><li>
<button type="button" class="btn dropdown-toggle" data-toggle="dropdown" style="background-color:white">
Btech II Year
</button>
<div class="dropdown-menu">
<a class="dropdown-item" href="#">Sec A</a>
<a class="dropdown-item" href="#">Sec B</a>
<a class="dropdown-item" href="#">Sec C</a>
</div></li>
<br>
<li>
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" style="background-color:white">
  Btech III Year
</button>
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Sec A</a>
  <a class="dropdown-item" href="#">Sec B</a>
  <a class="dropdown-item" href="#">Sec C</a>
</div></li>
<li>
<br>
  <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" style="background-color:white">
  Btech IV Year
</button>
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Sec A</a>
  <a class="dropdown-item" href="#">Sec B</a>
  <a class="dropdown-item" href="#">Sec C</a>
</div></li>
   </ul>
   </div>
   </div>
`,
  styles: [
  ]
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
