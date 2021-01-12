import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  template: `
   <style>
   .paralsec{
    background-image: url("assets/img/bg-pub.jpg"); 
   
  }
  @media screen and (max-width: 425px) {
    .new  {
      width:100vw !important;
       }
      
     }
     li{
       color:#3C4E84;
     }
  </style>
  <div class="jumbotron paral paralsec">
  <br><br><br><br>
  <div class="container new " style="width:50vw;margin-right:50vw">
  <ul class="list-unstyled">
  <li class="lead display-4"  style="text-align:center;color#3C4E84">Publications</li>
  <br>
<li>1. K Venkateswara Rao, Associate Professor, and Dr K V Chalapati Rao, Professor, CSE Department, "Spatiotemporal Data Mining: Issues, Tasks and Applications", International Journal of Computer Science and Engineering Survey (IJCSES), Vol 3, No. 1</li>
<hr>
<li>2. K Venkateswara Rao, Associate Professor, and Dr K V Chalapati Rao, Professor, CSE Department, "Discovering SpatioTemporal Topological Relationships", The Second International Workshop on Database Management Systems, DMS- 2011</li>
<hr>
<li>3. K Venkateswara Rao, Associate Professor, and Dr K V Chalapati Rao, Professor, CSE Department, "An Object-Oriented Modeling and Implementation of  Spatio-Temporal Knowledge Discovery System", International Journal of Computer Science and Information Technology(IJCSIT), Vol 3, No 2,April 2011.</li>
<hr>
<li>4.  Venkateswara Rao, Associate Professor, and Dr K V Chalapati Rao, Professor, CSE Department, "Mining Topological Relationship Patterns from Spatiotemporal Databases", International Journal of Data Mining And Knowledge Management Process (IJDKP), 2012 Vol.2 , No.2.
</li><hr> 
<li>5. K Venkateswara Rao, Associate Professor, and Dr K V Chalapati Rao, Professor, CSE Department, "An Overview of Object-Oriented Frameworks with Application in Spatiotemporal Data Mining", CVR Journal of Science and Technology, Vol 1, No 1, October 2011
</li> <hr>
<li>6. C.Ramesh , Associate Professor, and Dr. K. V. Chalapati Rao, Professor, CSE Department, "A Semantically Enriched Web Usage Based Recommendation Model", International Journal of Computer Science and Information Technology  (IJCSIT), Vol 3, No. 5, October 2011
</li> <hr>
<li>7. C.Ramesh, Associate Professor, and Dr. K. V. Chalapati Rao, Professor, CSE Department, "Ontology Languages for the Semantic Web", CVR Journal of Science and Technology, Vol 1, October 2011
</li> <hr>
<li>8. V.Dattatreya, Assistant Professor, and Dr K.V.Chalapati Rao, Professor, CSE Department, "Integrated Approach of Agile Programming and Design Patterns – Case Study", India Com-New Delhi, 2011
</li> <hr>
<li>9. A.Vani Vathsala, Associate Professor, CSE Department, "Optimal Call Based Checkpointing for Orchestrated Web Services", International Journal of Computer Applications, Vol 36 - No 8, 2011(IJCA)
</li> <hr>
<li>10. S. Suguna Mallika, Assistant Professor, CSE Department, "Activity Driven Teaching Model for teaching Software Project Management", CVR Journal of Science and Technology, Vol 1, October 2011
</li> <hr>
<li>11. M. Sunitha,  B.Babitha and J.Samatha, Assistant Professors, CSE & IT Departments, "A Short Survey on Routing Protocols in Ad-hoc Networks", CIIT international Journal, Dec 2011
</li> <hr>
<li>12. V.Dattatreya, Dr K.V.Chalapati Rao, Professor, CSE Department, "Agile programming and design patterns in web development - a case study", International Journal of Software Engineering & Applications (IJSEA), Vol.3, No.1, January 2012
</li> <hr>
<li>13. Dr K.V.Chalapati Rao, Professor, CSE Department, "Improving Software Modularity Using AOP", International Journal of Computer Science and Informatics, Vol 2, Issue 1, pp 191-195, 2012
</li> <hr>
<li>14. A.Vani Vathsala, Associate Professor, CSE Department,"Global Checkpointing of Orchestrated Web Services", IEEE Xplore Digital Library, 1st International Conference on Recent Advances in Information Technology (RAIT), ISM Dhanbad, March 2012
</li> <hr>
<li>15. A.Vani Vathsala, Associate Professor, CSE Department, "Checkpoint orchestrated Webservice", International Journal of Computer & Communication Technology (IJCCT), Vol 3, Issue 2, 2012
</li> <hr>
<li>16. M. Sunitha, Assistant Professor, CSE Department, "A survey on power aware routing protocols in mobile adhoc networks", National conference on computational intelligence and applications(NCCIA), 2012
</li> <hr>
<li>17. Dr N V Rao, Professor, CSE Department, “Water Marking In Medical Imaging for Security & Authentication”, Information Security Journal: A Global Perspective, 20:3,148-155.2012
</li> <hr>
<li>18. Dr N V Rao, Professor, CSE Department, "Image Quality Metrics for Watermarking applications", CVR Journal of Science and Technology, Vol 1, pp 1-7. Oct 2011
</li> <hr>
</ul> 
</div> 
<div>
  `,
  styles: [
  ]
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
