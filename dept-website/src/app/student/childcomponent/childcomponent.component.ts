import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
interface Post {
  title: string;
  content: string;
}
@Component({
  selector: 'app-childcomponent',
  template: `
    
<div *ngIf="showMePartially">

<div class="jumbotron" style="width:100vw">
    <ul *ngFor="let post of data| async">
      <li>Comapny Name:
        <strong>{{ post.title}}</strong>
      </li>  
      <li>Experience:
        <strong>{{ post.content}}</strong>
      </li> 
      <hr>
    </ul>
    </div> 
</div> 
  `,
  styles: [
  ]
})
export class ChildcomponentComponent implements OnInit {
  @Input() showMePartially!: boolean;
  @Input() data!:Observable<Post[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
