import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fdps-workshop',
  template: `
  <style>
  .paral {
    min-height: 50vw;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
    }
    .paralsec{
      background-image: url("assets/img/g-white.jpg"); 
    }
    @media screen and (max-width: 425px) {
      .new  {
         margin-top:10vh !important;
         }
        
       }
    </style>
  
   
  
  <div class="jumbotron paral paralsec new" >
  <br><br>
   <div class="container">
   <p class="display-4 lead" style="color:#3C4E84;text-align:center">List of FDP's (2019-2020)</p>
   <table style="background-color:#93A7C4" class="table table-bordered table-responsive">
   <tr>
   <th>S.No</th>
   <th>Event</th>
   </tr>
   <tr>
   <td>1</td>
   <td>A one week FDP on Machine Learning by CSE Department from 17.06.2019 to 21.06.2019</td>
   </tr>
   <tr>
   <td>2</td>
   <td>A one week FDP on Data Analytics through Python by CSE Department from 10.06.2019 to 14.06.2019</td>
   </tr>
   </table>
   </div>
   <div class="container">
   <p class="display-4 lead" style="color:#FDC8B8;text-align:center">List of Workshops (2018-2019)</p>
   <table style="background-color:#ffe2d9" class="table table-responsive table-bordered ">
   <tr>
   <th>S.No</th>
   <th>Event</th>
   <th>Date</th>
   <th>Title</th>
   <th>By</th>
   <th>From</th>
   </tr>
   <tr>
   <td>1</td>
   <td>2 Day Workshop</td>
   <td>16/2/19 & 2/3/19</td>
   <td>iOS Application Development</td>
   <td>Daniel Vivek</td>
   <td>Cybernauts</td>
   </tr>
   <tr>
   <td>2</td>
   <td>5 Day Workshop</td>
   <td>12/11/18 & 16/11/18</td>
   <td>Web Engineering</td>
   <td>Mr. Santosh Rechinthala
   Mr. G. Avinash</td>
   <td>CSI</td>
   </tr>
   <tr>
   <td>3</td>
   <td>6 Day Workshop</td>
   <td>5/11/18 to 10/11/18</td>
   <td>Python Programming</td>
   <td>Dr. R. K. Selva Kumar
   Dr. R. Ponnusamy	</td>
   <td>CSI</td>
   </tr>
   <tr>
   <td>4</td>
   <td>2 Day Workshop</td>
   <td>28/9/18 to 29/9/18</td>
   <td>Python Programming</td>
   <td>Mr. D. Sujan Kumar	</td>
   <td>CSI</td>
   </tr>
   <tr>
   <td>5</td>
   <td>1 Day Workshop</td>
   <td>1/9/18</td>
   <td>3D Gaming</td>
   <td>Mr. Avinash Singh	</td>
   <td>Cyernauts</td>
   </tr>
   <tr>
   <td>6</td>
   <td>1 Day Workshop</td>
   <td>20/9/18</td>
   <td>Entrepreneurship</td>
   <td>K.Harshavardhan Reddy, Founder and CEO, Frndzz Pvt Ltd	</td>
   <td>EDC CELL</td>
   </tr>
   </table>
   </div>

   <div class="container">
   <p class="display-4 lead" style="color:#3C4E84;text-align:center">List of Talks (2019-2020)</p>
   <table style="background-color:#93a7c4" class="table table-bordered table-responsive">
   <tr>
   <th>S.No</th>
   <th>Date</th>
   <th>Title</th>
   <th>Speaker</th>
   <th>From</th>
   </tr>
   <tr>
   <td>1</td>
   <td>9/1/19</td>
   <td>Overview of Electrical & Computer Engineering</td>
   <td>Dr. Guru Subramanyam</td>
   <td>CSI</td>
   </tr>
  
   <tr>
   <td>2</td>
   <td>2/8/18</td>
   <td>Entrepreneurship Skill Development</td>
   <td>Naveen Kumar Sharath KonathamDr. Guru Subramanyam</td>
   <td>ISTE & EDC CELL</td>
   </tr>

   <tr>
   <td>3</td>
   <td>21/12/18</td>
   <td>Treading towards a management career</td>
   <td>Raghuveer, Alumni</td>
   <td>CSI</td>
   </tr>

   <tr>
   <td>3</td>
   <td>05/01/19</td>
   <td>Project Expo</td>
   <td>S V S Ravi Kiran, Alumni</td>
   <td>CSI</td>
   </tr>
   </table>
   </div>
</div>

  `,
  styles: [
  ]
})
export class FdpsWorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
