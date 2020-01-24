import { Component } from '@angular/core';

import { DataService } from './services/data.service';
import { Data } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public data: Data;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(
      value => {
        this.data=value;
        console.log("App got the data");
      }
    )
  }

  public reload() {
    this.dataService.reload();
  }
}
