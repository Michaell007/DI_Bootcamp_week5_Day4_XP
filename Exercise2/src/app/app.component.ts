import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StartService } from './services/start.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exercise2';
  datas!: Observable<any>;

  constructor(private _serviceStart: StartService) { }

  ngOnInit() {
    this._serviceStart.getEventSendOnServer("http://").subscribe( (response: any) => this.datas = response);
  }

}
