import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
 <style>
 /* On screens that are 992px or less, set the background color to blue */

 
 /* On screens that are 600px or less, set the background color to olive */
 @media screen and (max-width: 700px) {
.new  {
   margin-top:10vh !important;
   }
   .paral{
     min-height:100vw !important;
   }
   .homesec img{
     height:50vh !important;
 
   }
 }



/* Header Parallax Element Style*/ 
.paral {
min-height: 50vw;
background-attachment: fixed;
background-size: cover;
background-position: 50% 50%;
}

/* Paragrapgh for Parallax Section */ 
.paral p {
font-size: 24px;
color:#f5f5f5;
text-align: center;
line-height: 60px;
}

/* Heading for Parallax Section */ 
.paral h1 {
color: rgba(255, 255, 255, 0.8);
font-size: 60px;
text-align: center;
padding-top: 60px;
line-height: 100px;
}

.homesec img {
  

  max-width: 100%;
  height: auto;
  

}

.paralsec1 {
background-image: url("assets/img/home/3.png");}




/* Footer */
.wn-footer {
padding: 2.5rem 0;
text-align: center;
color: white;
background-color: #607D8B;
border-top: .05rem solid #e5e5e5;
}
li{
  padding-left:1vw
}
.wn-footer a {
color: yellow;
}


@keyframes animation {
   100%{
    background-position:0px -3000px;
  }
}

.jumbotron{
  padding:0px;
  background-color:white ;
}
</style>




<!--display-->

<br>
<br>
<br>

<!--<div class="jumbotron paral paralsec2 "  style="padding-left:50vw ;justify-content: center;;background-color:#e5e4e7">-->
<div class="  jumbotron homesec new" >
  <img src="assets/img/home/1.png">

</div>

<br>
<app-next data-aos="fade-left" ></app-next>



<div class="jumbotron paral paralsec1 " >

<br>
<marquee behavior="slide" style="font-size:1.4vw" direction="left" BGCOLOR=#FDFEFE>
III AND IV YEAR B.Tech. CLASSWORK COMMENCE FROM 24th OF JUNE. ALL THE BEST!!!!!!!
</marquee>
<div  >

<app-news-announcements-quick-links></app-news-announcements-quick-links>
</div>

</div>





<br>
<br>

<div class="container text-center my-3">
    <h3 class="lead display-4"  style="color:#AC467A">Meet Our Faculty</h3>
    <br>
    <br>
    <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
        <div class="carousel-inner w-100" role="listbox">
            <div class="carousel-item row no-gutters active">
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/lcssir.jpg"></div>
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/ragsir.jpg"></div>
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/resizevanmam.jpg"></div>
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/resizenvrsir.jpg"></div>
            </div>
            <div class="carousel-item row no-gutters">
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/dugmam.jpg"></div>
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/rvssir.jpg"></div>
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/mdsir.jpg"></div>
                <div class="col-3 float-left"><img class="img-fluid" src="assets/img/faculty/resizesubsir.jpg"></div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

</div>

 
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  isShown:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
