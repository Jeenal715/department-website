import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  template: `<style>
  
  @media screen and (max-width: 425px) {
    .new  {
       margin-top:10vh !important;
       
       }
.jumbotron{
  background-color: #FFE2D9 !important;
}
      
     }
    .jumbotron
    {background-image: url("assets/img/academic/vission-mission.png"); 
      background-size: cover;
      background-repeat: no-repeat;
    }
    
  </style> 
  <div class="jumbotron  new ">
 <br><br>
  <div class="container" style=""><div class="container" style="background-color:#AC467A;width:50vw;margin-left:5vw">
  
 <h3 class="lead " style="text-align:center;;color: #FFE2D9"> VISION</h3>
 <br><ul  class="list-unstyled lead"  style="text-align:center;;color: #FFE2D9">
  <li>Towards a Global Knowledge Hub, striving continuously in pursuit of excellence in Education, Research, Consultancy and Technological services to the society.
  </li></ul></div>
  <div class="container" style="background-color: #93A7C4;width:50vw;margin-left:5vw">
  <h3 class="lead " style="text-align:center;color:#FFE2D9"> MISSION</h3>
  <br><ul  class="list-unstyled lead" style="text-align:center;color:#FFE2D9">
  <li>M1: To produce the best quality Computer Science professionals by imparting quality training, hands on experience and value education.
  </li>
  <li>M2: To strengthen links with industry through partnerships and collaborative developmental works.
  </li>
  <li>M3: To attain self-sustainability and overall development through Research, Consultancy and Development activities.
  </li>
  <li>M4: To extend technical expertise to other technical institutions of the region and play a lead role in imparting technical education.
  </li>
  <li>M5: To inculcate work ethics and commitment in students for their future endeavors to serve the society.
  </li>
  </ul>
  </div>
  </div>
  </div>
  `,
  styles: [
  ]
})
export class VisionMissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
