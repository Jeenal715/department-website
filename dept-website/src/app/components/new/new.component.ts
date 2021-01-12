import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-new',
  template: `
  <br>
  <br>
  <br>
  <br>
  <input type="text" [(ngModel)]="title" name="title" placeholder="Title..">
<textarea [(ngModel)]="content" name="content" placeholder="Content.."></textarea>
<input type="submit" value="Add a Post" (click)="addPost()">


<div class="jumbotron" style="background-color:#f6f6f7">
<ul *ngFor="let post of posts | async">
  <li>Comapny Name:
    <strong>{{ post.companyname}}</strong>
    <br>
    Experience:
    {{post.experience}}
  </li>
  <hr>
</ul>
</div>
<div class="jumbotron">
<input type="button" value="List" (click)="getMarker()">

  <li *ngFor="let reqpost of reqposts | async">Comapny Name:
    <strong>{{ reqpost.companyname}}</strong>
    <br>
    Experience:
    {{reqpost.experience}}
  </li>
  <hr>

</div>

  `,
  styles: [
  ]
})
export class NewComponent implements OnInit {

markers!:Observable<Post[]>;;
  title!: string;
  content!: string;
  postsCol!: AngularFirestoreCollection<Post>;
  posts!: Observable<Post[]>;
  reqpostsCol!: AngularFirestoreCollection<Post>;
  reqposts!: Observable<Post[]>;
  constructor(private afs: AngularFirestore) {}


  ngOnInit(): void {
    this.postsCol = this.afs.collection('placements');
    this.posts = this.postsCol.valueChanges();
  }
  addPost() {
    this.afs.collection('placements').add({'companyname': this.title, 'experience': this.content});
  }
  

  /*

  async getMarker() {
   
    await this.afs.collection('placements').get().toPromise()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        this.marker.push(doc.data());
      });
    });

   console.log(this.marker);
    
    return this.marker;
  }
  */
getMarker(){
  this.reqpostsCol = this.afs.collection('placements');
  this.reqposts = this.postsCol.valueChanges();
}
}
