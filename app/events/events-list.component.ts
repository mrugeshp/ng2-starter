import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2017',
        imageUrl: 'app/assets/images/angularconnect-shield.png'
    }

    events:any[];

    constructor(private eventService: EventService) {
        
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
    
    handleEventClicked(data) {
        console.log(data);
    }
}