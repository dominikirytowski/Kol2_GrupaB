import { Component, OnInit } from '@angular/core';
import {DIDataService} from "../../di-data.service";

@Component({
  selector: 'app-di-forum',
  templateUrl: './di-forum.component.html',
  styleUrls: ['./di-forum.component.css']
})
export class DIForumComponent implements OnInit {

  data : any;

  constructor(private serviceData: DIDataService) {
    this.serviceData
      .getAllPosts()
      .subscribe(val => this.data = val);
  }

  ngOnInit(): void {
  }

}
