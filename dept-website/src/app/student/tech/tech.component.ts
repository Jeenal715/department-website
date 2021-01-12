import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { map, filter, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-tech',
  template: `<br><br>
  <style>
  .jumbotron{
    padding:0px;
    background-color:white ;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 425px) {
    .new  {
       margin-top:10vh !important;
       }
      
      }
  </style>
  <div class="jumbotron new " >
<img  src="assets/img/news.png">
</div>
  <div class="jumbotron " style="margin-left:10vw;background-color:white;margin-right:10vw">
    <ul class="table-bordered list-unstyled" *ngFor="let links of news.articles" style=""><!--.articles">-->
        <li>
            <div class="container">
                <div class="row"  data-aos="fade-right"  data-aos-duration="2000" >
                
                    <div class=" col-xl-6 col-md-6">
                <a href={{links.url}} target="_blank">{{links.title}}</a>
                <p style="color:#FFE2D9">{{links.author}}</p>
                <p>{{links.publishedAt.split('T')[0]}}</p>
        <p style="color:#FFE2D9">{{links.content}}</p>
    </div>
    <div class=" col-xl-4 col-md-4">
        <img class="img-responsive"  style="width:500px;height:300px"src={{links.urlToImage}}>
    </div>
    
</div>
    </div> 
        </li>
    </ul>
</div>
  `,
  styles: [
  ]
})
export class TechComponent implements OnInit {
  

  news:any = {};
  constructor (
    private http: Http
  ) {
    this.getNews().subscribe(data=>{
      this.news=data;
      console.log(this.news);
    });
    
  
  }//
  ngOnInit(): void {

  }

  getNews() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c807a79da5a74b5a8fe93f7dcbfc03fa`)
    .pipe(map((res:Response) => res.json()));
  }
}




