import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement',
  template: `
<style>

@media screen and (max-width: 425px) {
  .new  {
     margin-top:10vh !important;
     }
    
    }

img {
  max-width: 100%;
  height: auto;
}
.jumbotron{
  padding:0px;
  background-color:white ;
}
</style>
<br><br><div class="new" >
<div class="jumbotron  "  >
<img   src="assets/img/plac/1.png">
</div>
<div class="jumbotron " >
<img  data-aos="flip-up"  data-aos-duration="2000" src="assets/img/plac/2.png">
</div>
<div class="jumbotron " >
<img  data-aos="fade-right"  data-aos-duration="2000"  src="assets/img/plac/3.png">
</div>
<div class="jumbotron " >
<img  data-aos="fade-left"  data-aos-duration="2000" src="assets/img/plac/4-1.png">
</div>
<div class="jumbotron " >
<img   src="assets/img/plac/5.png">

</div>
<div class="jumbotron"><br><br>
<h3 class=" Lead" style="margin-left:35vw;margin-right:35vw">Click Here To</h3><br>
<button  data-aos="flip-left" class="btn-primary btn-responsive" style="margin-left:45vw;margin-right:45vw;height:5vh;"><a style="color:white" routerLink="/list-of-companies">Get Started>></a></button>
</div>
</div>
  `,
  styles: [
  ]
})
export class PlacementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
