import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AService {
  evs!: EventSource;
  private subj = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  returnAsObservable() {
    return this.subj.asObservable();
  }

  GetExchangeData() {
    let subject = this.subj;

    if (typeof (EventSource) !=='undefined') {

      this.evs = new EventSource('//localhost:8080/getStockUpdate');
      this.evs.onopen = function (e) {
        console.log("Opening connection.Ready State is "+this.readyState);
      }

      this.evs.onmessage = function (e) {
        console.log("Message Received.Ready State is "+this.readyState);
        subject.next(JSON.parse(e.data));
      }

      this.evs.addEventListener("timestamp", function (e) {
        console.log("Timestamp event Received.Ready State is " + this.readyState);
        subject.next(e["data"]);
      })

      this.evs.onerror = function (e) {
        console.log(e);
        if (this.readyState == 0) {
          console.log("Reconnecting ...");
        }
      }
    }
  }


  stopExchangeUpdates() {
    this.evs.close();
  }

}
