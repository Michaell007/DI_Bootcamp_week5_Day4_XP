import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private _sseService: SseService, private _zone: Zone) { }

  getEventSendOnServer(url: string) {
    return new Observable(subcriber => {
      const eventSource = this._sseService.getEventSource(url);

      eventSource.onmessage = event => {
        this._zone.run(() => {
          subcriber.next(event);
        })
      }

      eventSource.onerror = error => {
        this._zone.run(() => {
          subcriber.error(error);
        })
      }

    })
  }

}
