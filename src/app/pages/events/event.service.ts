import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared';
import { HttpClient } from '@angular/common/http';
import { EventType } from './event-type';

@Injectable({
  providedIn: 'root'
})
export class EventService extends ApiService<EventType> {

  constructor(
    http: HttpClient
  ) {
    super("LocalEvento", http);
  }

  newObject(): EventType {
    return { } as EventType;
  }
}
