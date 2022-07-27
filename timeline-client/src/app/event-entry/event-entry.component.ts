import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EventModel } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-event-entry',
  templateUrl: './event-entry.component.html',
  styleUrls: ['./event-entry.component.css']
})
export class EventEntryComponent implements OnInit {
  eventEntryForm: FormGroup;
  selectedEra: string;

  constructor(private fb: FormBuilder, private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.eventEntryForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      era: ['', [Validators.required]],
      year: ['', [Validators.pattern("^[0-9]+$")]]
    });
  }

  save(): void {
    //console.log(this.eventEntryForm)
    var formData = new EventModel(0, this.eventEntryForm.get('title').value, this.eventEntryForm.get('era').value, this.eventEntryForm.get('year').value)
    this.eventDataService.create(formData)
          .subscribe({
            next: () => {
              this.eventDataService.onNewEntry(true);
            },
            error: (err) => console.log(err),
            complete: () => {}
          })
  }
}
