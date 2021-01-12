import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-announcements-quick-links',
  template: `
  <style>
 li{
   font-size:1.4vw;
 }
  </style>
   <div class="container-fluid">
 
    
   <div class="row ">
  <!--News Space-->
 
   <div  class=" col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12" style="margin-top:30px;" >
   <ul class="list-unstyled lead"   style="color:black;font-size:1.4vw;text-align:left;padding-left:1vw;background-color:#FDFEFE"   >
   <li class="lead"style="font-size:3vw;text-decoration:none;color:#FDC8B8" >Latest News</li>
   <li><hr>
   Btech III<sup>rd</sup> year results to be announced next week
   </li>
   <hr>
   <li >
   Telangan epass Scholarship applications are open!checkout<a style="decoration:none" href=#> https://telaganaepass.cgg.gov.in</a>
   </li>
   <hr>
   <li>
   B.Tech I & II Year I Semester Supplementary Examinations (R18: 2018&2019 Admitted Batches) Notification
   </li>
   <hr>
   <li>
   Revised Schedule for B.Tech II/II (R12&R15) Supplementary Examinations on 8-12-2020
   </li>
   <hr>
   <li>
   Revised Schedule for B.Tech II/II (R12&R15) Supplementary Examinations on 8-12-2020
   </li>
   <hr>
   <li>
   Revised Schedule for B.Tech II/II (R12&R15) Supplementary Examinations on 8-12-2020
   </li>
   <hr>
   <li>
   Revised Schedule for B.Tech II/II (R12&R15) Supplementary Examinations on 8-12-2020
   </li>
   <hr>
   </ul>
   </div>
   <!--end of news space-->



   <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12" style="height:wrap-content;font-size:2vw;margin-top:10px;text-align:center;background-color:#FDFEFE">
   <h5 class="display-3"  style="font-size:3vw;text-align:center;color:#AC467A" >ABOUT US</h5>
   <hr>
   <p class="lead" style="font-size:1.4vw;color:#3C4E84">
   The Computer Science and Engineering department was started in the year 2001 with an intake of 60 B.Tech. students. The current B.Tech. intake is 300. The department also offers M.Tech. in Artificial Intelligence (with an intake of 18) and Ph.D. The department was accredited by the National Board of Accreditation (NBA) of All India Council for Technical Education (AICTE) in the year 2007.
   </p>
   <p class="lead"  style="font-size:1.4vw;color:#3C4E84">
   
   Major achievements by  students of this department include the award of 3 Gold Medals by JNTU(H) to Mr. Harsh H. Shah, during 2008-09 (for outstanding academic performance among all affiliated colleges).
   </p>
   <p class="lead"  style="font-size:1.4vw;color:#3C4E84">
   The department has set up 2 research labs for encouraging research activity. The department is equipped with licensed software like Rational Rose, the latest Microsoft software through an Microsoft Imagine subscription, as well as a Digital Library. Along with Windows and Linux, various advanced operating systems (Windows Server, MacOS, VMWare) are available in the labs. Labs are also equipped with the latest IBM/HP/Apple servers. There is a separate Apple Lab with iMac and Mac Mini systems. Students also have access to devices like tablets (iOS, Android) for doing projects. Certification oriented programs are conducted regularly to better prepare students for industry (e.g., Adobe Flex, IBM DB2, EMC SAN, Infosys Campus Connect).</p>
   
   </div>









 <!--QuickLinks-->
     <div class=" col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12" style="margin-top:30px;">
     <table class="table table-bordered lead" style="background-color:#FDFEFE;font-size:1.4vw;" >
     <th  class="display-3 text-dark"  style="font-size:2vw;text-align:center;"  ><span style="color:#FDC8B8">Quick Links</span></th>
     <tr>
     <td><a style="text-decoration:none" href="#">B.Tech. First Year Books</a></td>
     </tr>
     <tr>
     <td><a style="text-decoration:none" href="#">B.Tech I & II Year I Semester</a></td>
     </tr>
     <tr><td>
    <a style="text-decoration:none" href="#">  Webathon Registrations</a></td>
     </tr>
     </table>
     </div>
   <!--End of QuickLinks-->
   </div>
 </div>
  `,
  styles: [
  ]
})
export class NewsAnnouncementsQuickLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
