import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  template: `
  
  <style>

  .paralsec{
   background-image: url("assets/img/g-white3.jpg"); 
 }

  .b-0 {
    bottom: 0;
}
.bg-shadow {
    background: rgba(76, 76, 76, 0);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(179, 171, 171, 0)), color-stop(49%, rgba(48, 48, 48, 0.37)), color-stop(100%, rgba(19, 19, 19, 0.8)));
    background: linear-gradient(to bottom, rgba(179, 171, 171, 0) 0%, rgba(48, 48, 48, 0.71) 49%, rgba(19, 19, 19, 0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
}
.top-indicator {
    right: 0;
    top: 1rem;
    bottom: inherit;
    left: inherit;
    margin-right: 1rem;
}
.overflow {
    position: relative;
    overflow: hidden;
}
.zoom img {
    transition: all 0.2s linear;
}
.zoom:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}



@media screen and (max-width: 425px) {
  .new  {
     margin-top:10vh !important;
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

/* Image for Parallax Section */ 

.jumbotron{margin-bottom: 0;}

/* Footer */
.wn-footer {
padding: 2.5rem 0;
text-align: center;
color: white;
background-color: #607D8B;
border-top: .05rem solid #e5e5e5;
}

.wn-footer a {
color: yellow;
}
</style>

    
    <style>
#banner {
  background-image: linear-gradient(120deg, #91C4FF 0%, #F0F7FF 87%);
  position: relative;
  width: 100%;
  height: 950px;
}

#cloud-scroll {
  background:url(assets/img/computing.jpg);
  // url(https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1485547918/new-york-city-skyline-BIGCITY0117.jpg?itok=po0Op8ou) repeat-x;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  -webkit-animation: 900000s backgroundScroll infinite linear;
  -moz-animation: 900000s backgroundScroll infinite linear;
  -o-animation: 900000s backgroundScroll infinite linear;
  -ms-animation: 900000s backgroundScroll infinite linear;
  animation: 900000s backgroundScroll infinite linear;
}
#cloud-scroll1{
  background:url(assets/img/applelab1.jpg);
  // url(https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1485547918/new-york-city-skyline-BIGCITY0117.jpg?itok=po0Op8ou) repeat-x;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  -webkit-animation: 900000s backgroundScroll infinite linear;
  -moz-animation: 900000s backgroundScroll infinite linear;
  -o-animation: 900000s backgroundScroll infinite linear;
  -ms-animation: 900000s backgroundScroll infinite linear;
  animation: 900000s backgroundScroll infinite linear;
}

@-webkit-keyframes backgroundScroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -99999999px 0;
  }
}

@keyframes backgroundScroll {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -99999999px 0;
  }
}

</style>

<br>
  <br>
  <br>
  
<div class="container-fluid new ">

<div class="row">
<div class="col-md-6">
  <div id="banner" style="height:30vw">
  <div id="cloud-scroll">
  

    <ul class="list-unstyled"style="font-size:1vw;background-color:#93a7c4;width:max-content;height:max-content">
   <h6><b> Labs</b></h6>
    <li>3 B.Tech. Labs</li>
   <li> 4 M.Tech. Labs</li>
    
     
    </ul>
    
  </div>
</div>
</div>
<div class="col-md-6">
<div id="banner" style="height:30vw">
<div id="cloud-scroll1">


<ul class="list-unstyled"style="font-size:1vw;background-color:#93a7c4;width:max-content;height:max-content">
<h6><b>Apple Lab</b></h6>
<li>Apple Mac Pro Server</li>
<li>   Apple iMac and Mac Mini Systems (Apple Lab)</li>
<li>  Zenith & HCL desktops with LCD/LED monitors<li>
<li>  Tablets (iPad, Android)</li>
  
 </ul>
 
</div>
</div>
</div>
</div>
<br>
<hr>
<br>
<div class="row">
<div class="col-md-1">
</div>
<div class="col-md-5">
<ul class="list-unstyled"style="font-size:1vw;background-color:#93a7c4;min-height:17vw">
<h6><b>Lab Equipment</b></h6>

    <li>IBM System x226 eServers</li>
    <li>IBM System x3400 M3 Servers</li>
    <li>IBM System x3300 M4 Servers</li>
    <li>IBM System x3250 M5 Rack Servers</li>
    <li>HP Proliant ML110 G7 Servers</li>
    <li>RFID</li>
    <li>LCD projectors</li>
    <li>WiFi routers</li>
    <li>Laser printer/scanners</li>
</ul>
</div>
<div class="col-md-1">
</div>
<div class="col-md-4">

<ul class="list-unstyled"style="font-size:1vw;background-color:#93a7c4;min-height:17vw">
<h6><b>Software</b></h6>
<li>All Microsoft software (through Microsoft Imagine subscription)</li>
<li>Rational Suite (including Rational Rose)</li>
<li>All Oracle software (through Oracle Academy membership)</li>
<li>AutoDesk Maya</li>
<li>macOS Server</li>
<li>Various flavors of Linux</li>

</ul>
</div>
<div class="col-md-1">
</div>

</div>

<br>
<hr>
<br>



<!--SECTION START-->
<div class="row " style="height:40vw">




    <!--Start slider news-->
    <div class="col-2">
    <ul class="list-unstyled"style="font-size:1vw;background-color:#93a7c4;width:max-content;height:max-content">
<h6><b> Others</b></h6>
<li>Department Library</li>
<li>Seminar Hall
</li>
<li>Conference Room</li>
 
  
 </ul>

    </div>
    <div class="col-8 col-md-8 pb-0 pb-md-3 pt-2 pr-md-1 main">
    
        <div id="featured" class="carousel slide carousel" data-ride="carousel">
        
            <!--dots navigate-->
            <ol class="carousel-indicators top-indicator">
                <li data-target="#featured" data-slide-to="0" class="active"></li>
                <li data-target="#featured" data-slide-to="1"></li>
                <li data-target="#featured" data-slide-to="2"></li>
             
            </ol>
            
            <!--carousel inner-->
            <div class="carousel-inner">
                <!--Item slider-->
                <div class="carousel-item active">
                    <div class="card border-0 rounded-0 text-light overflow zoom">
                        <div class="position-relative">
                            <!--thumbnail img-->
                            <div class="ratio_left-cover-1 image-wrapper">
                               <a href="assets/img/inf1.jpg">
                                    <img class="img-fluid w-100"
                                         src="assets/img/inf1.jpg"
                                         alt="Bootstrap news template">
                                </a>
                            </div>
                          
                        </div>
                    </div>
                </div>
                
                <!--Item slider-->
                <div class="carousel-item">
                    <div class="card border-0 rounded-0 text-light overflow zoom">
                        <div class="position-relative">
                            <!--thumbnail img-->
                            <div class="ratio_left-cover-1 image-wrapper">
                            <a href="assets/img/inf2.jpg">
                                    <img class="img-fluid w-100"
                                         src="assets/img/inf2.jpg"
                                         alt="Bootstrap news theme">
                                </a>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
                <!--Item slider-->
                <div class="carousel-item">
                    <div class="card border-0 rounded-0 text-light overflow zoom">
                        <div class="position-relative">
                            <!--thumbnail img-->
                            <div class="ratio_left-cover-1 image-wrapper">
                            <a href="assets/img/inf3.jpg">
                                    <img class="img-fluid w-100"
                                         src="assets/img/inf3.jpg"
                                         alt="Bootstrap blog template">
                               </a>
                            </div>
                           
                        </div>
                    </div>
                </div>
                
               
                          
                <!--end item slider-->
            </div>
            <!--end carousel inner-->
        </div>
        
        <!--navigation-->
        <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
   
    </div>
 
<div class="col-2"></div>









</div>

  `,
  styles: [
  ]
})
export class InfrastructureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
