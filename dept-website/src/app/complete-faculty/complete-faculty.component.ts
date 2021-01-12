import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-faculty',
  template: `
  <style>
 
  @media screen and (max-width: 425px) {
    .new  {
       margin-top:10vh !important;
       }
      
     }
  </style>
  <br>
  <br>
  <br>
  
  <div class="jumbotron new " style="background-color:white">
  <div class="container">
  <p class="lead display-4" style="text-align:center ;color:#3C4E84" >List Of Faculty</p>
  <br>
  <table style="background-color:#FFF1ED" class="table table-bordered table-responsive" border="1" cellpadding="1" cellspacing="1">
            

      <tr><th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Joining Date</th>
      <th scope="col">Qualification</th>
      <th scope="col">Nature of Association</th>
  </tr>
  
  <tbody>
      <tr>
          <td>1.</td>
          <td>Prof. L.C. Siva Reddy</td>
          <td>Prof. &amp; Vice Principal</td>
          <td>15th Sep 2001</td>
          <td>M.Phil.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>2.</td>
          <td>Dr. Raghava V. Cherabuddi</td>
          <td>Professor</td>
          <td>1st July 2009</td>
          <td>M.S. Ph.D. (U.S.A)</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>3.</td>
          <td>Dr. N.V. Rao</td>
          <td>Professor &amp; Dean Academics</td>
          <td>26th Aug 2010</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>4.</td>
          <td>Dr. K. Venkateswara Rao</td>
          <td>Professor &amp;HoD</td>
          <td>1st June 2005</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>5.</td>
          <td>Dr. A. Vani Vathsala</td>
          <td>Professor</td>
          <td>23rd Nov 2006</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>6.</td>
          <td>Dr. D. DurgaBhavani</td>
          <td>Professor</td>
          <td>9th Dec 2016</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>7.</td>
          <td>Prof. R.V.S. Krishna Dutt</td>
          <td>Professor</td>
          <td>20th July 2017</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>8.</td>
          <td>Dr. Md. Yusuf Mulge</td>
          <td>Professor</td>
          <td>11th Aug 2017</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>9.</td>
          <td>Dr. N. Subhash Chandra</td>
          <td>Professor</td>
          <td>4th Sep 2017</td>
          <td>M.Tech., Ph.D</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>10.</td>
          <td>Dr. Raghava M</td>
          <td>Professor</td>
          <td>1st Aug 2003</td>
          <td>M.Tech., Ph.D</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>11.</td>
          <td>Dr. Selvakumar R. K.</td>
          <td>Professor</td>
          <td>30th Nov 2017</td>
          <td>M.Tech., Ph.D</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>12.</td>
          <td>Dr. Venkatesh Sharma</td>
          <td>Professor</td>
          <td>20th Aug 2018</td>
          <td>M.Tech., Ph.D</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>13.</td>
          <td>Dr. D. Sasikala</td>
          <td>Professor</td>
          <td>31st&nbsp;&nbsp;Aug 2018</td>
          <td>M.E., Ph D</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>14.</td>
          <td>Dr. R. Usha Rani</td>
          <td>Assoc. Professor</td>
          <td>17th Nov 2016</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>15.</td>
          <td>Dr. KallaMadhusudhana</td>
          <td>Assoc. Professor</td>
          <td>14th Oct 2017</td>
          <td>M.Tech., Ph.D.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>16.</td>
          <td>Mr. C. Ramesh</td>
          <td>Assoc. Professor</td>
          <td>3rd Oct 2001</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>17.</td>
          <td>Mr. Ch. Ram Mohan</td>
          <td>Assoc. Professor</td>
          <td>19th April 2007</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>18.</td>
          <td>Ms. SujanaCherabuddi</td>
          <td>Assoc. Professor</td>
          <td>1st July 2009</td>
          <td>M.S. (U.S.A)</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>19.</td>
          <td>Mr. B. Ram Babu</td>
          <td>Assoc. Professor</td>
          <td>18th Aug 2004</td>
          <td>M. Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>20.</td>
          <td>Mr. V. Dattatreya</td>
          <td>Assoc. Professor</td>
          <td>23rd Nov 2006</td>
          <td>M. Tech</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>21.</td>
          <td>Ms. Sunitha Maddhi</td>
          <td>Assoc. Professor</td>
          <td>15th June 2006</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>22.</td>
          <td>Mr. SuhailAfroz</td>
          <td>Assoc. Professor</td>
          <td>5th Jan 2007</td>
          <td>M. Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>23.</td>
          <td>Ms. S. SugunaMallika</td>
          <td>Assoc. Professor</td>
          <td>3rd June 2009</td>
          <td>M. Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>24.</td>
          <td>Mr. D. Sujan Kumar</td>
          <td>Assoc. Professor</td>
          <td>10th May 2011</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>25.</td>
          <td>Mr. N. Satyanarayana</td>
          <td>Assoc. Professor</td>
          <td>1st July 2013</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>26.</td>
          <td>Mr. G. Balakrishna</td>
          <td>Assoc. Professor</td>
          <td>31st Dec 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>27.</td>
          <td>Mrs. D. Sandhya Rani</td>
          <td>Assoc. Professor</td>
          <td>31st Dec 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>28.</td>
          <td>Dr.M.Jaiganesh</td>
          <td>Assoc. Professor</td>
          <td>6th Dec 2017</td>
          <td>M.E., Ph.D</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>29.</td>
          <td>Mr. M. Hanimi Reddy</td>
          <td>Asst. Professor</td>
          <td>1st June 2009</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>30.</td>
          <td>Mr. Syed Muqthadar Ali</td>
          <td>Asst. Professor</td>
          <td>1st June 2009</td>
          <td>M. Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>31.</td>
          <td>Mr. R. Sahith</td>
          <td>Asst. Professor</td>
          <td>2nd June 2009</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>32.</td>
          <td>Ms. M. Sathya Devi</td>
          <td>Asst. Professor</td>
          <td>26th June 2006</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>33.</td>
          <td>Ms. G. Swetha</td>
          <td>Asst. Professor</td>
          <td>9th Nov 2012</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>34.</td>
          <td>Ms. Ch. Sarada</td>
          <td>Asst. Professor</td>
          <td>10th June 2013</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>35.</td>
          <td>Mr. B. Ashwin Kumar</td>
          <td>Asst. Professor</td>
          <td>2nd June 2014</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>36.</td>
          <td>Ms. Ch. Bhavani</td>
          <td>Asst. Professor</td>
          <td>2nd June 2014</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>37.</td>
          <td>Mr. R. Sathya Prakash</td>
          <td>Asst. Professor</td>
          <td>2nd June 2014</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>38.</td>
          <td>Ms. P. Madhavi</td>
          <td>Asst. Professor</td>
          <td>20th June 2014</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>39.</td>
          <td>Ms. V.N.V.L.S. Swathi</td>
          <td>Asst. Professor</td>
          <td>5th Aug 2014</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>40.</td>
          <td>Mr. K. Veeranjaneyulu</td>
          <td>Asst. Professor</td>
          <td>25th May 2015</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>41.</td>
          <td>Mr. Mohd. Umar</td>
          <td>Asst. Professor</td>
          <td>1st May 2015</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>42.</td>
          <td>Ms. Priyanka Gupta</td>
          <td>Asst. Professor</td>
          <td>24th Jan 2014</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>43.</td>
          <td>Mr. R. Srishylam</td>
          <td>Asst. Professor</td>
          <td>27th May 2015</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>44.</td>
          <td>Ms. Dasari A Rachana</td>
          <td>Asst. Professor</td>
          <td>19th Jan 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>45.</td>
          <td>Ms. Y. Sarada Devi</td>
          <td>Asst. Professor</td>
          <td>22nd Jan 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>46.</td>
          <td>Ms. TSP Madhuri</td>
          <td>Asst. Professor</td>
          <td>19th Jan 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>47.</td>
          <td>Mr. V. D. S. Krishna</td>
          <td>Asst. Professor</td>
          <td>6th Aug 2015</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>48.</td>
          <td>Ms. B. RevathiLavanya</td>
          <td>Asst. Professor</td>
          <td>29th Feb 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>49.</td>
          <td>Ms. M. Archana</td>
          <td>Asst. Professor</td>
          <td>30th Mar 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>50.</td>
          <td>Ms. D S V Lakshmi Sunkara</td>
          <td>Asst. Professor</td>
          <td>6th April 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>51.</td>
          <td>Mrs. S. Lalitha</td>
          <td>Asst. Professor</td>
          <td>1st May 2015</td>
          <td>M. Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>52.</td>
          <td>Ms. G. Sandhya</td>
          <td>Asst. Professor</td>
          <td>27th May 2015</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>53.</td>
          <td>Ms. A. Swathi</td>
          <td>Asst. Professor</td>
          <td>20th Nov 2015</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>54.</td>
          <td>Mr. Thanedar Md. Asif</td>
          <td>Asst. Professor</td>
          <td>25th Jan 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>55.</td>
          <td>Mr. S. Srinivas</td>
          <td>Asst. Professor</td>
          <td>22nd Dec 2015</td>
          <td>M.Tech., MBA</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>56.</td>
          <td>Ms. K. Deepthi Reddy</td>
          <td>Asst. Professor</td>
          <td>29th Feb 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>57.</td>
          <td>Ms. M. Vasavi</td>
          <td>Asst. Professor</td>
          <td>1st April 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>58.</td>
          <td>Ms. G. Sushma</td>
          <td>Asst. Professor</td>
          <td>1st June 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>59.</td>
          <td>Ms. K. Manasa</td>
          <td>Asst. Professor</td>
          <td>1st Feb 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>60.</td>
          <td>Ms. P. Pravallika</td>
          <td>Asst. Professor</td>
          <td>18th Jan 2016</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>61.</td>
          <td>Mr.K.Manoj Kumar</td>
          <td>Asst. Professor</td>
          <td>17th Jan 2019</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>62.</td>
          <td>Ms..B.Haripriya</td>
          <td>Asst. Professor</td>
          <td>17th Jan 2019</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>63</td>
          <td>Mr.A.Nagaraju</td>
          <td>Asst. Professor</td>
          <td>17th Jan 2019</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>64</td>
          <td>Ms. K.Ambika</td>
          <td>Asst. Professor</td>
          <td>17th Jan 2019</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>65</td>
          <td>Mr. AvinashAmaranayani</td>
          <td>Asst. Professor</td>
          <td>7th June 2019</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>
      <tr>
          <td>66</td>
          <td>Ms. D.Shanthi</td>
          <td>Asst. Professor</td>
          <td>27th June 2019</td>
          <td>M.Tech.</td>
          <td>Regular</td>
      </tr>


  </tbody>
</table>
</div>
</div>
  `,
  styles: [
  ]
})
export class CompleteFacultyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
