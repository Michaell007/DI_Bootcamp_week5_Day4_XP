import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  title = 'Exercise1';
  nb!: any;

  ngOnInit(): void {
    interval(1000).subscribe(
      x => {  this.nb = (Math.random()*10).toFixed() }  
    )
  }
  
}
