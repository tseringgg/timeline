import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-event-edit-dialog',
  templateUrl: './event-edit-dialog.component.html',
  styleUrls: ['./event-edit-dialog.component.css']
})

export class EventEditDialogComponent implements OnInit {
  eventData: Event;
  eventEditForm: FormGroup;
  constructor(private fb: FormBuilder, private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.eventEditForm = this.fb.group({
      title: [this.eventData.title, [Validators.required, Validators.minLength(3)]],
      era: [this.eventData.era, [Validators.required]],
      year: [this.eventData.year, [Validators.required, Validators.pattern("^[0-9]+$")]]
    })
  }

  save(): void {
    // var formData = new TimelineEvent(this.eventData.id, this.eventEditForm.get('title').value, this.eventEditForm.get('era').value, this.eventEditForm.get('year').value, this.eventEditForm.get('country').value)
    // this.eventData = formData;
    // this.eventDataService.patch(formData.id, formData)
    //       .subscribe({
    //         next: () => {
    //           this.eventDataService.onNewEntry(true);
    //         },
    //         error: (err) => console.log(err),
    //         complete: () => {}
    //       })
    // this.ngOnInit();
  }

}
