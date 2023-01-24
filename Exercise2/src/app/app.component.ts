import { Component, OnInit } from '@angular/core';
import { AService } from './a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exercise2';

  constructor(private serv: AService) { }

  ngOnInit() {
    this.serv.returnAsObservable().subscribe(data => console.log(data));
  }

  GetExchangeData() {
    this.serv.GetExchangeData();
  }

  stopExchangeUpdates() {
    this.serv.stopExchangeUpdates();
  }

}
