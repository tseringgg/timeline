import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventModel } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  events: EventModel[];
  displayedColumns: string[] = ['title', 'era', 'year', 'delete'];
  dataSource = ELEMENT_DATA;
  subs: Subscription[] = [];

  constructor(private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getSampleEvents();
    this.subs.push(this.eventDataService.newEventEntrySubmitSubject$
          .subscribe(x => {
            this.getEvents();
          }));
  }

  ngOnDestroy(): void {
      this.subs.forEach(x => x.unsubscribe());
  }

  getEvents() {
    this.eventDataService.get()
          .subscribe({
            next: (data) => this.events = data,
            error: (err) => {},
            complete: () => {}
          })
  }

  getSampleEvents(){
    this.events = [
      new EventModel(1, "Death of Bob", "AD", 124),
      new EventModel(2, "hfeianfeja", "BC", 111),
      new EventModel(3, "Birth of Christ", "BC", 800)
    ]
  }

  delete(id: number): void {

    this.eventDataService.delete(id)
          .subscribe(() => this.getEvents());
  }

}
