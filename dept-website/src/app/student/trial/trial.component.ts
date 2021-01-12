import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
interface Post {
  title: string;
  content: string;
}
@Component({
  selector: 'app-trial',
  template: `
  <style>
  .jumbotron{
    background-colo:white;
  }
  </style>
  <br><br><br><br>
 <p class="display-4 lead" style="text-align:center">Word's From the Experienced</p>
  
  <div   class="jumbotron" style="background-color:#93a7c4">
  <ul class="list-unstyled" *ngFor="let post of posts| async">
  <div class="jumbotron" style="margin-left:10vw;margin-right:10vw;width:80vw;white-space: pre-wrap">
    <li style="background-color:white"><h2 class="lead" style="color:#3C4E84">Company Name:</h2>
     {{ post.title}}
    <br>
    <h2 class="lead" style="color:#3C4E84">Experience:</h2>
      <strong style="white-space:pre-wrap">{{ post.content}}</strong>
    </li> 
    <br>
    <hr>
    </div>
  </ul>
 
  </div> 

  `,
  styles: [
  ]
})
export class TrialComponent implements OnInit {
  title!: string;
  content!: string;
  postsCol!: AngularFirestoreCollection<Post>;
  posts!: Observable<Post[]>;
  constructor(private route: ActivatedRoute,private afs: AngularFirestore) {
    this.route.params.subscribe( params => {console.log(params["id"]) 
    this.postsCol = this.afs.collection(params["id"]);
    this.posts = this.postsCol.valueChanges();
  });
}

  ngOnInit(): void {
  }

}
