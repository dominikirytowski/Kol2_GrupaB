import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-di-forum-item',
  templateUrl: './di-forum-item.component.html',
  styleUrls: ['./di-forum-item.component.css']
})
export class DIForumItemComponent implements OnInit {

  @Input('id')
  id : string | undefined;
  @Input('title')
  title : string | undefined;
  @Input('text')
  text : string | undefined;
  @Input('image')
  image : string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
