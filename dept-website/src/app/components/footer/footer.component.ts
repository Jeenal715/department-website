import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    
<style>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');


.container-fluid {
    overflow: hidden;
    margin-top: 250px;
    background:#93A7C4;
    color: #627482 !important;
    margin-bottom: 0;
    padding-bottom: 0
}

small {
    font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))) !important
}

.bold-text {
    color: white !important
}

.mt-55 {
    margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important
}

h3 {
    font-size: calc(34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))) !important
}

.social {
    font-size: 21px !important
}

.rights {
    font-size: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important
}
</style>
  <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
  <footer>
      <div class="row my-5 justify-content-center py-5">
          <div class="col-11">
              <div class="row ">
                  <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                      <h3 class="text-light mb-md-0 mb-5 bold-text">Deptartment Of CSE.</h3>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                      <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                      <ul class="list-unstyled">
                          <li><a class="text-light" style="text-decoration:none" routerLink="/">Home</a></li>
                          <li><a class="text-light"  style="text-decoration:none" routerLink="/faculty">Faculty</a></li>
                          <li><a  class="text-light"  style="text-decoration:none" routerLink="/infrastructure">Infrastructure</a></li>
                          <li><span  class="text-light" style="text-decoration:none" >Contact Us</span></li>
                          <li class="text-light" >040-23305099</li>
<li class="text-light" >xyz@cvr.ac.in</li>
                      </ul>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                      <h6 class="mb-3 mb-lg-4 text-light bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                      <p class="mb-1 text-light ">Vastunagar, Mangalpalli (V),
                      Ibrahimpatnam (M), Rangareddy (D),
                      Telangana 501 510</p>
                     
                  </div>
              </div>
              <div class="row ">
                  <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                      <p class="social text-light mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights text-light"><span>&#174;</span> All Rights Reserved.</small>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                      <h6 class="mt-55 mt-2 text-light bold-text"><b>Visit </b></h6><small class="text-light"> <span><i class="fa fa-envelope text-light"  aria-hidden="true"></i></span> cvr.ac.in</small>
                  </div>
                  
              </div>
          </div>
      </div>
  </footer>
</div>

  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
