import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
interface Post {
  title: string;
  content: string;
}
@Component({
  selector: 'app-companies',
  template: `
  <!-- Page Content --><br><br><br><br><br>
<div class="container">
  <div class="row">
    <!-- Team Member 1 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
      <a routerLink="/blog/amazon">
        <input type="image" src="assets/plac/companies/amazon.jpg" class="card-img-top" alt="...">
        </a>
        
      </div>
    </div>

    
   
    <!-- Team Member 2 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
      <a routerLink="/blog/servicenow">
      <input type="image" src="assets/plac/companies/servicenow.png" class="card-img-top" alt="...">
       </a>
      </div>
    </div>
    
   <!-- <app-childcomponent [showMePartially]="showVar" [data]="posts" style="background-color:white"></app-childcomponent>-->
  

    <!-- Team Member 3 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
      <a routerLink="/blog/commvault">
      <input type="image" src="assets/plac/companies/commvault.png" class="card-img-top" alt="...">
       </a>
        </div>
    </div>
    <!-- Team Member 4 -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-0 shadow">
      <a routerLink="/blog/oracle">
      <input type="image" src="assets/plac/companies/oracle.png" class="card-img-top" alt="...">
       </a>
    </div>
  </div>
  <!-- /.row -->
<!--second row-->
<div class="row">
<!-- Team Member 1 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/synchrony">
    <input type="image" src="assets/plac/companies/synchrony.png" class="card-img-top" alt="...">
    </a>
    
  </div>
</div>



<!-- Team Member 2 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/opentext">
  <input type="image" src="assets/plac/companies/opentext.png" class="card-img-top" alt="...">
   </a>
  </div>
</div>

<!-- <app-childcomponent [showMePartially]="showVar" [data]="posts" style="background-color:white"></app-childcomponent>-->


<!-- Team Member 3 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/kony">
  <input type="image" src="assets/plac/companies/kony.png" class="card-img-top" alt="...">
   </a>
    </div>
</div>
<!-- Team Member 4 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/quickr">
  <input type="image" src="assets/plac/companies/quickr.png" class="card-img-top" alt="...">
   </a>
</div>
</div>
<!--Thrid Row-->
<div class="row">
<!-- Team Member 1 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/cleartrip">
    <input type="image" src="assets/plac/companies/cleartrip.png" class="card-img-top" alt="...">
    </a>
    
  </div>
</div>



<!-- Team Member 2 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/accenture">
  <input type="image" src="assets/plac/companies/accenture.png" class="card-img-top" alt="...">
   </a>
  </div>
</div>

<!-- <app-childcomponent [showMePartially]="showVar" [data]="posts" style="background-color:white"></app-childcomponent>-->


<!-- Team Member 3 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/virtusa">
  <input type="image" src="assets/plac/companies/virtusa.png" class="card-img-top" alt="...">
   </a>
    </div>
</div>
<!-- Team Member 4 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/tcs">
  <input type="image" src="assets/plac/companies/tcs.png" class="card-img-top" alt="...">
   </a>
</div>
</div>
<!--4th row-->
<div class="row">
<!-- Team Member 1 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/ncr">
    <input type="image" src="assets/plac/companies/ncr.png" class="card-img-top" alt="...">
    </a>
    
  </div>
</div>



<!-- Team Member 2 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/mindtree">
  <input type="image" src="assets/plac/companies/mindtree.png" class="card-img-top" alt="...">
   </a>
  </div>
</div>

<!-- <app-childcomponent [showMePartially]="showVar" [data]="posts" style="background-color:white"></app-childcomponent>-->


<!-- Team Member 3 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/infosys">
  <input type="image" src="assets/plac/companies/infosys.png" class="card-img-top" alt="...">
   </a>
    </div>
</div>
<!-- Team Member 4 -->
<div class="col-xl-3 col-md-6 mb-4">
  <div class="card border-0 shadow">
  <a routerLink="/blog/dxc">
  <input type="image" src="assets/plac/companies/dxc.png" class="card-img-top" alt="...">
   </a>
</div>
</div>
</div>
<!-- /.container -->

  `,
  styles: [
  ]
})
export class CompaniesComponent implements OnInit {
  title!: string;
  content!: string;
  postsCol!: AngularFirestoreCollection<Post>;
  posts!: Observable<Post[]>;
  constructor(private afs: AngularFirestore) {}
  showVar: boolean = true;
  ngOnInit() {
   
  }
  toggleChild(collection:string){
    this.showVar = !this.showVar;
    this.postsCol = this.afs.collection(collection);
    this.posts = this.postsCol.valueChanges();
   
}

}
