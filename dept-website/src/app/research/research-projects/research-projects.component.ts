import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-projects',
  template: `
  <style>
  .paralsec{
    background-image: url("assets/img/g-white.jpg"); 
  }
  @media screen and (max-width: 425px) {
    .new  {
       margin-top:10vh !important;
       }
      
     }
  </style>
  <br>
  <br>
  <br>
  
  <div class="jumbotron paral paralsec new ">
  <div class="container">
  <p class="lead display-4" style="text-align:center ;color:#3C4E84" >List Of Research Projects By Students</p>
  <br>
  <table style="background-color:#93a7c4" class="table table-bordered table-responsive" border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<td style="text-align: center;"><strong>Name of the Student</strong></td>
			<td style="text-align: center;"><strong>Department</strong></td>
			<td style="text-align: center;"><strong>Title of the Paper/ Participation/<br>
			Presentation</strong></td>
			<td style="text-align: center;"><strong>National/ International/<br>
			Journal/<br>
			Conference/ Lecture</strong></td>
			<td style="text-align: center;"><strong>Venue</strong></td>
			<td style="text-align: center;"><strong>Date &amp;<br>
			Year</strong></td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch. Vikas Chandra<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>Converged Services &amp; a new<br>
			generation of Networking</td>
			<td style="text-align: center;">by Dr. Bhumip<br>
			Khasnabish</td>
			<td>Tata Consultancy<br>
			Services,<br>
			Deccan Park,<br>
			Hyderabad</td>
			<td>13th July, 2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch.Vikas Chandra,<br>
			B. Susheel Kumar<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>Signal Processing Applications in Maternal-Fetal Healthcare</td>
			<td style="text-align: center;">by Dr. V. John<br>
			Mathews,<br>
			Fellow IEEE, University of Utah</td>
			<td>IIIT, Hyderabad</td>
			<td>2nd August,<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch. Vikas Chandra<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>Development of Massive Wind Power Plants</td>
			<td style="text-align: center;">Half-day<br>
			Tutorial</td>
			<td>CII-Green<br>
			Business<br>
			Centre,<br>
			Hyderabad</td>
			<td>23rd August,<br>
			2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>U-Mask</td>
			<td style="text-align: center;">National</td>
			<td>NIT Nagpur</td>
			<td>3rd<br>
			September,<br>
			2010</td>
		</tr>
		<tr>
			<td>G. Rakesh Reddy</td>
			<td style="text-align: center;">EIE</td>
			<td>Nanosolar Technology</td>
			<td style="text-align: center;">State Level</td>
			<td>NIT Nagpur</td>
			<td>3rd<br>
			September,<br>
			2010</td>
		</tr>
		<tr>
			<td>G. Rakesh Reddy,<br>
			T. Harish</td>
			<td style="text-align: center;">EIE</td>
			<td>Aero Modeling</td>
			<td style="text-align: center;">State Level</td>
			<td>NIT Nagpur</td>
			<td>3rd &amp; 4th<br>
			September,<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch. Vikas Chandra<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>Next Generation Network(NGN) Implementation Issues</td>
			<td style="text-align: center;">by Mr. P.V. Sreekanth,<br>
			General Manager (O&amp;M)</td>
			<td>Rail Tel,<br>
			Indian Railways,<br>
			O.U. Engg. College</td>
			<td>4th<br>
			September,<br>
			2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>Shareholder to tree holder</td>
			<td style="text-align: center;">National</td>
			<td>DAIICT, Gujarath.<br>
			Gandhinagar</td>
			<td>13th September, 2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>M-CHIP (Model No-1)</td>
			<td style="text-align: center;">National</td>
			<td>DAIICT, Gujarath.<br>
			Gandhinagar</td>
			<td>15th September, 2010</td>
		</tr>
		<tr>
			<td>S. Soujanya</td>
			<td style="text-align: center;">ECE</td>
			<td>Heart bypass by Nano</td>
			<td style="text-align: center;">National</td>
			<td>TKREC</td>
			<td>18th September, 2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>M-Tooth (Model No-1)</td>
			<td style="text-align: center;">National</td>
			<td>NIT Warangal</td>
			<td>24th September, 2010</td>
		</tr>
		<tr>
			<td>T. Harsha,<br>
			G. L. Pooja Madhuri</td>
			<td style="text-align: center;">EIE</td>
			<td>Nanosolar</td>
			<td style="text-align: center;">State Level</td>
			<td>NIT Warangal</td>
			<td>25th September,<br>
			2010</td>
		</tr>
		<tr>
			<td>K. Uday Sravanth,<br>
			G. Sidharth</td>
			<td style="text-align: center;">EIE</td>
			<td>Virtual Instrumentation</td>
			<td style="text-align: center;">State Level</td>
			<td>Vignan Institute of<br>
			Technology</td>
			<td>September,<br>
			2010</td>
		</tr>
		<tr>
			<td>J. Badrinath</td>
			<td style="text-align: center;">EIE</td>
			<td>Biometrics</td>
			<td style="text-align: center;">State Level</td>
			<td>VIT, Deshmukhi</td>
			<td>September,<br>
			2010</td>
		</tr>
		<tr>
			<td>Krishna Murthy<br>
			Parvati,<br>
			Y. Prathyusha</td>
			<td style="text-align: center;">EIE</td>
			<td>Solar Voltage Cell</td>
			<td style="text-align: center;">State Level</td>
			<td>Sreenidhi Institute of<br>
			Science &amp; Technology</td>
			<td>2nd October,<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Soujanya</td>
			<td style="text-align: center;">EIE</td>
			<td>Tsunami Detector</td>
			<td style="text-align: center;">State Level</td>
			<td>Sreenidhi Institute of<br>
			Science &amp; Technology</td>
			<td>2nd October,<br>
			2010</td>
		</tr>
		<tr>
			<td>S. Santhosh Kumar,<br>
			M. Rajesh</td>
			<td style="text-align: center;">EIE</td>
			<td>CHLCD</td>
			<td style="text-align: center;">State Level</td>
			<td>Sreenidhi Institute of<br>
			Science &amp; Technology</td>
			<td>2nd October,<br>
			2010</td>
		</tr>
		<tr>
			<td>K. Uday Shravanth,<br>
			M. Srikanth</td>
			<td style="text-align: center;">EIE</td>
			<td>Micro Controllers</td>
			<td style="text-align: center;">State Level</td>
			<td>Sreenidhi Institute of<br>
			Science &amp; Technology</td>
			<td>2nd October,<br>
			2010</td>
		</tr>
		<tr>
			<td>M. Vatsalya</td>
			<td style="text-align: center;">EIE</td>
			<td>Haptic Technology</td>
			<td style="text-align: center;">State Level</td>
			<td>DVR<br>
			College of Engg &amp;<br>
			Technology</td>
			<td>5th October,<br>
			2010</td>
		</tr>
		<tr>
			<td>Mr. Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>M-chip (Model No-3)</td>
			<td style="text-align: center;">State Level</td>
			<td>MVSR, Hyderbad, A.P.</td>
			<td>8th October,<br>
			2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>TRAFFIC ARREST</td>
			<td style="text-align: center;">National Level</td>
			<td>IIIT, Hyderabad</td>
			<td>11th October,<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Harini,<br>
			Y. Prathyusha</td>
			<td style="text-align: center;">EIE</td>
			<td>4G Wireless Technology</td>
			<td style="text-align: center;">State Level</td>
			<td>Mallareddy Engineering<br>
			College</td>
			<td>13th &amp; 14th<br>
			October,<br>
			2010</td>
		</tr>
		<tr>
			<td>Krishna Murthy<br>
			Parvathi</td>
			<td style="text-align: center;">EIE</td>
			<td>Virtual Surgery</td>
			<td style="text-align: center;">State Level</td>
			<td>Mallareddy Engineering<br>
			College</td>
			<td>13th &amp; 14th<br>
			October,<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch. Vikas Chandra<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>LabView</td>
			<td style="text-align: center;">National</td>
			<td>India LabVIEW Conference 2010, Hyderabad</td>
			<td>22nd October,<br>
			2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>U-Mask Project</td>
			<td style="text-align: center;">National</td>
			<td>NIT, Surathkal, Karnataka.</td>
			<td>22nd October,<br>
			2010</td>
		</tr>
		<tr>
			<td>S. Santosh Kumar,<br>
			M. Srikanth</td>
			<td style="text-align: center;">EIE</td>
			<td>CHLCD</td>
			<td style="text-align: center;">State Level</td>
			<td>Geetanjali College of Engg. &amp;<br>
			Technology</td>
			<td>24th October,<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch.Vikas Chandra<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>A Lecture on Inertial System and GPS Technology</td>
			<td style="text-align: center;">by Dr.George<br>
			Schmidt, MIT, USA</td>
			<td>O.U. College of Engineering</td>
			<td>29th October,<br>
			2010</td>
		</tr>
		<tr>
			<td>Sai Kiran Chavali</td>
			<td style="text-align: center;">IT</td>
			<td>Exor (Workshop)</td>
			<td style="text-align: center;">National</td>
			<td>IIIT, Hyderabad, A.P.</td>
			<td>30th October,<br>
			2010</td>
		</tr>
		<tr>
			<td>V. Ajit,<br>
			K. Uday Sravanth</td>
			<td style="text-align: center;">EIE</td>
			<td>Smart Sensors</td>
			<td style="text-align: center;">State Level<br>
			Hyderabad.</td>
			<td>JBIET, A.P.</td>
			<td>October,<br>
			2010</td>
		</tr>
		<tr>
			<td>R. Archana,<br>
			J. Ankita</td>
			<td style="text-align: center;">EIE</td>
			<td>Micro Electronic Pill</td>
			<td style="text-align: center;">State Level</td>
			<td>JBIET, A.P.</td>
			<td>October, 2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch.Vikas Chandra<br>
			&nbsp;</td>
			<td style="text-align: center;">EIE</td>
			<td>Conservation using Fuzzy logic and DSM Techniques- Robots</td>
			<td style="text-align: center;">International</td>
			<td>IEEE International TENCON<br>
			Conference 2010, Fukuoka, Japan</td>
			<td>21st-24th,<br>
			November,<br>
			2010</td>
		</tr>
		<tr>
			<td>M. Prabhavathi, &nbsp;&nbsp;<br>
			Asst. Professor,<br>
			A. Praveen,<br>
			Ch.VikasChandra,<br>
			M. Karthik,<br>
			P. Rashmi Reddy<br>
			&nbsp;</td>
			<td style="text-align: center;">EEE<br>
			EIE</td>
			<td>Managing Demand with Respective Production using Fuzzy Logic Controller for Maximum Energy Conservation</td>
			<td style="text-align: center;">International</td>
			<td>IEEE International TENCON<br>
			Conference 2010, Fukuoka, Japan</td>
			<td>21st-24th,<br>
			November<br>
			2010</td>
		</tr>
		<tr>
			<td>A. Praveen,<br>
			Ch.Vikas Chandra</td>
			<td style="text-align: center;">EIE</td>
			<td>Design and Implementation of Automatic Water</td>
			<td style="text-align: center;">International</td>
			<td>IEEE International<br>
			TENCON Conference 2010, Fukuoka, Japan</td>
			<td>21st-24th,<br>
			November,<br>
			2010</td>
		</tr>
		<tr>
			<td>S. Soujanya</td>
			<td style="text-align: center;">ECE</td>
			<td>3G to 4G Wireless Communications</td>
			<td style="text-align: center;">National</td>
			<td>SNIST</td>
			<td>6th – 7th<br>
			December, 2010</td>
		</tr>
		<tr>
			<td>Aditya</td>
			<td style="text-align: center;">EIE</td>
			<td>Vertical Take off &amp; Landing using Dual Rotors</td>
			<td style="text-align: center;">State Level</td>
			<td>NCE,<br>
			Hyderabad</td>
			<td>30th December, 2010</td>
		</tr>
		<tr>
			<td>V. Ajit,<br>
			K. Uday Sravanth</td>
			<td style="text-align: center;">EIE</td>
			<td>Electro Oculography</td>
			<td style="text-align: center;">State Level</td>
			<td>NCE,<br>
			Hyderabad</td>
			<td>30th December,<br>
			2010</td>
		</tr>
		<tr>
			<td>Krishna Murthy Parvati,<br>
			Y. Prathyusha</td>
			<td style="text-align: center;">EIE</td>
			<td>Nano Technology</td>
			<td style="text-align: center;">State Level</td>
			<td>DVR<br>
			college of<br>
			Engineering</td>
			<td>30th December,<br>
			2010</td>
		</tr>
		<tr>
			<td>G. Sanjeev Kumar</td>
			<td style="text-align: center;">CSE</td>
			<td>Bubble Sensing</td>
			<td style="text-align: center;">State Level</td>
			<td>SNIST, Hyderabad</td>
			<td>August, 2011</td>
		</tr>
		<tr>
			<td>P. Deepak,<br>
			S. Naishad</td>
			<td style="text-align: center;">CSE</td>
			<td>X Internet</td>
			<td style="text-align: center;">State Level</td>
			<td>VNR VJIET, Hyderabad</td>
			<td>2011</td>
		</tr>
		<tr>
			<td>M Sai Swaroop, N Vivekananda Reddy</td>
			<td style="text-align: center;">ECE</td>
			<td>Witricity</td>
			<td style="text-align: center;">State Level</td>
			<td>UDAAN2012, SNIST , Hyderabad</td>
			<td>February 2012</td>
		</tr>
		<tr>
			<td>B Ravi Teja, A Sandeep Kumar</td>
			<td style="text-align: center;">ECE</td>
			<td>Augmented Reality</td>
			<td style="text-align: center;">State Level</td>
			<td>UDAAN2012, SNIST, Hyderabad</td>
			<td>February 2012</td>
		</tr>
		<tr>
			<td>N S Sri Madhur,<br>
			P Srinath Reddy</td>
			<td style="text-align: center;">ECE</td>
			<td>Eye gaze human computer interface</td>
			<td style="text-align: center;">State Level</td>
			<td>AAKRITHI 2K12, OU, Hyderabad</td>
			<td>March 2012</td>
		</tr>
		<tr>
			<td>B Supriya</td>
			<td style="text-align: center;">ECE</td>
			<td>
			<p>Digital Signal Processing</p>
			</td>
			<td style="text-align: center;">State Level</td>
			<td>
			<p>Aakruthi 2K12, OU, Hyderabad</p>
			</td>
			<td>March 2012</td>
		</tr>
		<tr>
			<td>K Bhanu Kiran<br>
			A Christopher</td>
			<td style="text-align: center;">ECE</td>
			<td>Ornithopter</td>
			<td style="text-align: center;">State Level</td>
			<td>BITS, Hyderabad</td>
			<td>
			<p>&nbsp;March 2012</p>
			</td>
		</tr>
	</tbody>
</table>
</div>
</div>
   
  `,
  styles: [
  ]
})
export class ResearchProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
