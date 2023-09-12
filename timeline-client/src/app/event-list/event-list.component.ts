import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { config, map, Subscription } from 'rxjs';
import { EventEditDialogComponent } from '../event-edit-dialog/event-edit-dialog.component';
import { TimelineEvent } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';
import { TimelineDataService } from '../services/timeline-data.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Timeline } from 'c:/git_jorjei/timeline/timeline-client/src/app/models/timeline.model';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  events: TimelineEvent[] = [];
  selectedEvent: TimelineEvent;
  displayedColumns: string[] = ['id', 'title', 'era', 'year', 'delete', 'isReviewed', 'isApproved'];
  subs: Subscription[] = [];
  timelines: Timeline[];

  currentPageSize: number = 5;
  currentPageIndex: number = 0;
  totalRecordCount: number = 0;

  constructor(private timelineDataService: TimelineDataService, private eventDataService: EventDataService, public dialog: MatDialog) { }

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
    // this.eventDataService.get()
    //       .subscribe({
    //         next: (data) => this.events = data,
    //         error: (err) => {},
    //         complete: () => {}
    //       })

    const pageIndex = !this.paginator ? this.currentPageIndex : this.paginator.pageIndex;
    const pageSize = !this.paginator ? this.currentPageSize : this.paginator.pageSize;


    this.timelineDataService.getTimelines()
            // .pipe(map(x => x.map(y => y.events)))
              .subscribe(x => {
                this.timelines = x;
                console.log(x.length);

                // const requestHeader = JSON.parse(x.headers.get("X-Pagination"));
                // this.totalRecordCount = requestHeader.TotalRecordCount;

                this.timelines.forEach(x => {
                    this.events = this.events.concat(x.events);
                    console.log(this.events.length);
                })
              });
  }

  handlePageEvent(e:PageEvent): void {
    this.getEvents();
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

  // getSampleEvents(){
  //   this.events = [
  //     new EventModel(1, "Death of Bob", "AD", 124),
  //     new EventModel(2, "hfeianfeja", "BC", 111),
  //     new EventModel(3, "Birth of Christ", "BC", 800)
  //   ]
  // }

  delete(id: number): void {

    this.eventDataService.delete(id)
          .subscribe(() => this.getEvents());
  }

}
