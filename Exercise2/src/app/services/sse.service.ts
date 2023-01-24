import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor() { }

  /**
   * Creation du event source
   * @param url
   * @returns EventSource
   */
  getEventSource(url: string) : EventSource {
    return new EventSource(url);
  }

}
