import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { config, Subscription } from 'rxjs';
import { EventEditDialogComponent } from '../event-edit-dialog/event-edit-dialog.component';
import { EventModel } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  events: EventModel[];
  selectedEvent: EventModel;
  displayedColumns: string[] = ['title', 'era', 'year', 'delete', 'isReviewed', 'isApproved'];
  subs: Subscription[] = [];

  constructor(private eventDataService: EventDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEvents();
    //this.getSampleEvents();
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
  openEditDialog(x: any): void {
    console.log(x);
    this.selectedEvent = x;
    const dialogRef = this.dialog.open(EventEditDialogComponent);
    dialogRef.disableClose = true;
    dialogRef.componentInstance.eventData = x;
    //dialogRef.componentInstance.ngOnInit();
    dialogRef.afterClosed().subscribe(result => {
      console.log("Edit Dialog was closed.")
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
