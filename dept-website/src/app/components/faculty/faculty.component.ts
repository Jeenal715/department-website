import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  template: `
<style>
@import url(https://fonts.googleapis.com/css?family=Quicksand:400,300);
body{
    font-family: 'Quicksand', sans-serif;
}
.team{
    padding:75px 0;
}
h6.description{
	font-weight: bold;
	letter-spacing: 2px;
	color: #999;
	border-bottom: 1px solid rgba(0, 0, 0,0.1);
	padding-bottom: 5px;
}
.profile{
  margin-top: 25px;

}
.profile h1{
	font-weight: normal;
	font-size: 20px;
	margin:10px 0 0 0;
}
.profile h2{
	font-size: 14px;
	font-weight: lighter;
	margin-top: 5px;
}
.profile .img-box{
	opacity: 1;
	display: block;
  position: relative;
 
}
img{
  width:200px;
  height:200px
}
.profile .img-box:after{
	content:"";
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.75);
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
}
.img-box ul{
	position: absolute;
	z-index: 2;
	bottom: 50px;
	text-align: center;
	width: 100%;
	padding-left: 0px;
	height: 0px;
	margin:0px;
	opacity: 0;
}
.profile .img-box:after, .img-box ul, .img-box ul li{
	-webkit-transition: all 0.5s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
}
.img-box ul i{
	font-size: 20px;
	letter-spacing: 10px;
}
.img-box ul li{
	width: 30px;
    height: 30px;
    text-align: center;
    border: 1px solid #88C425;
    margin: 2px;
    padding: 5px;
	display: inline-block;
}
.img-box a{
	color:#fff;
}
.img-box:hover:after{
	opacity: 1;
}
.img-box:hover ul{
	opacity: 1;
}
.img-box ul a{
	-webkit-transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	transition: all 0.3s ease-in-out 0s;
}
.img-box a:hover li{
	border-color: #fff;
	color: #88C425;
}
a{
    color:#88C425;
}
a:hover{
    text-decoration:none;
    color:#519548;
}
i.red{
    color:#BC0213;
}
img{
  border:5px solid black;
}

@media screen and (max-width: 700px) {
  .new  {
     margin-top:10vh !important;
     }
    }
    .paralsec{
      background-image: url("assets/img/faculty/2.png"); 
    }
</style>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   
  <div class="jumbotron paral paralsec new ">
  <section class="team new">
  <br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="col-lg-12">
          <h2 class="description" style="color:#3C4E84">OUR FACULTY</h2 >
          <a routerLink="/complete-faculty" style="color:#AC467A">click here to view complete list</a>
          
            <div class="row pt-md">
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box" >
                  <img src="assets/img/faculty/ragsir.jpg" >
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1> Dr. Raghava V. Cherabuddi</h1>
                <h2>Professor</h2>
                <p>M.S. Ph.D. (U.S.A)</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/lcssir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Prof. L.C. Siva Reddy</h1>
                <h2>Prof.& Vice Principal</h2>
                <p>M.Phil.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/vensir1.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. K. Venkateswara Rao</h1>
                <h2>Co-founder/ Marketing</h2>
                <p>M.Tech., Ph.D.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/vanmam.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. A. Vani Vathsala</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/nvrsir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. N.V. Rao</h1>
                <h2>Professor & Dean Academics</h2>
                <p>M.Tech., Ph.D.</p>

              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/dugmam.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. D. DurgaBhavani</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/rvssir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Prof. R.V.S. Krishna Dutt</h1>
                <h2>Professor</h2>
                <p>M.Tech.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/mdsir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. Md. Yusuf Mulge</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D.</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/subsir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. N. Subhash Chandra</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/iotsir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. Raghava M</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/selsir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. Selvakumar R. K.</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D</p>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 profile">
                <div class="img-box">
                  <img src="assets/img/faculty/shrsir.jpg" class="img-responsive">
                  <ul class="text-center">
                    <a href="#"><li><i class="fa fa-facebook"></i></li></a>
                    <a href="#"><li><i class="fa fa-twitter"></i></li></a>
                    <a href="#"><li><i class="fa fa-linkedin"></i></li></a>
                  </ul>
                </div>
                <h1>Dr. Venkatesh Sharma</h1>
                <h2>Professor</h2>
                <p>M.Tech., Ph.D</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
  </div>

  `,
  styles: [
  ]
})
export class FacultyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
