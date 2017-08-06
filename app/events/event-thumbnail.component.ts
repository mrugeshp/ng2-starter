import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html'
})

export class EventThumbnailComponent {
    @Input() event:any;
    @Output() eventClick = new EventEmitter();
    someProperty:any = "Some Value from child";


    handleClickMe() {
        console.log('Clicked on me');
        this.eventClick.emit({obj: 'Object1'});
    }

    logFoo():string {
        console.log('From thumbnail component! LogFoo');
        return "Hello!!";
    }
}