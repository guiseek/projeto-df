import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Observable } from 'rxjs';
import { EventType } from './event-type';
import { ListComponent } from 'src/app/shared';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent extends ListComponent<EventType> implements OnInit {
  events$: Observable<EventType>;
  constructor(
    service: EventService    
  ) {
    super(service, "nome");
  }

  ngOnInit() {
    this.events$ = this.updateData();
    this.$meta.subscribe((meta) => {
      this.offset = meta.next;
      this.events$ = super.updateData();
    })
  }
}
