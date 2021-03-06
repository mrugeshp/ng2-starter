import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ EventsAppComponent, EventsListComponent, EventThumbnailComponent ],
    bootstrap: [ EventsAppComponent ],
    providers: [ EventService ]
})

export class AppModule {}