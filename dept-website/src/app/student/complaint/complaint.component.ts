import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint',
  template: `<br><br><br>
  <style>
  .paralsec{
    background-image: url("assets/img/complaint.jpg"); 
    min-height:100vh !important;
    
  }</style>
  <div class="jumbotron paral paralsec">
   
    <br>
    <embed src="https://form.jotform.com/203642578158462" style="margin-left:20vw;margin-top:50px;width:60vw; height: 100vh;">
   </div>
  `,
  styles: [
  ]
})
export class ComplaintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
