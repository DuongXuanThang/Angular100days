import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Author } from '../authors.model';


@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="select.emit(author)" style="margin-left: 10px; margin-right: 10px;">select</button>
      <button (click)="deleteAuthor.emit(author.id)">x</button>
    </div>
  `,
  styles: [``],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: any;
  @Output() select = new EventEmitter<Author>();
  @Output() deleteAuthor = new EventEmitter<number>(); //Lúc này <Author> có ý nghĩa là EventEmitter này chỉ được emit giá trị là Author mà thôi.
  constructor() { }

  ngOnInit(): void {
  }

}
