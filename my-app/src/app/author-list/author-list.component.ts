import { Component, OnInit ,Input} from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'app-author-list',
  template: `<app-author-detail
    *ngFor="let author of authors"
    [author]="author" (select)="onSelectAuthor($event) " (deleteAuthor)="onDeleteAuthor($event) "
  ></app-author-detail>
  <div>current author: {{currentAuthor.firstName}}</div>`,
  styles: [``],
})

// ten event phải đặt tên trùng với tên event trong component cha

export class AuthorListComponent implements OnInit {
 authors = authors ;
 currentAuthor = authors[0];
 onSelectAuthor(selectAuthor : Author){
this.currentAuthor = selectAuthor;
 }
 onDeleteAuthor(id : number){
    this.authors = this.authors.filter(author => author.id !== this.currentAuthor.id);
if(this.authors.length > 0){
  this.currentAuthor = this.authors[0];
}
 }
  constructor() { }

  ngOnInit(): void {
  }

}
