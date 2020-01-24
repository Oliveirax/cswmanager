// a component to test all the webservices

import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public data: Data;

  constructor( private dataService: DataService ) {
    console.log("test component NEW");
  }

  ngOnInit() {
    console.log("test component INIT");

    this.dataService.getData().subscribe(
      value => {
        this.data=value;
        console.log("test got the data");
      }
    )
  }
}
