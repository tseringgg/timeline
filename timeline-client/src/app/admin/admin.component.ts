import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventEntryComponent } from '../event-entry/event-entry.component';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public dialogId: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EventEntryComponent,
      {
        position: { top: '80px' },
        width: '100%',
        // height: '80%'
    });

    dialogRef.disableClose = true;
    //this.dialogId = dialogRef.id;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
