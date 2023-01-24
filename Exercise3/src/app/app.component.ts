import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exercise3';
  datas!: Observable<any>;

  constructor(private _serviceStart: StartService) { }
  
  ngOnInit(): void {

    this._serviceStart.getEventSendOnServer("http://").map( (response: any) => this.datas = response);

  }



}
