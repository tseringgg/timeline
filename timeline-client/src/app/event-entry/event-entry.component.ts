import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NewEvent, TimelineEvent } from '../models/event.model';
import { EventDataService } from '../services/event-data.service';

@Component({
  selector: 'app-event-entry',
  templateUrl: './event-entry.component.html',
  styleUrls: ['./event-entry.component.css']
})
export class EventEntryComponent implements OnInit {
  eventEntryForm: FormGroup;
  imageUrls: string[] = [];
  eventReferences: string[] = [];

  constructor(private fb: FormBuilder, private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.eventEntryForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(150)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      era: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
      eventDate: [''],
      // timelineId: ['', [Validators.required]],
      // eventTypeId: ['', [Validators.required]],
      country: ['', [Validators.required, Validators.maxLength(50)]],
      imageUrl: [''],
      reference: [''],
    });
  }

  save(): void {
    //console.log(this.eventEntryForm)
    var formData = new NewEvent(this.eventEntryForm.get('title').value,
                                this.eventEntryForm.get('description').value,
                                this.eventEntryForm.get('era').value,
                                this.eventEntryForm.get('year').value,
                                this.eventEntryForm.get('eventDate')?.value,
                                this.eventEntryForm.get('country').value,
                                this.imageUrls,
                                this.eventReferences
                                // this.eventEntryForm.get('images')?.value,
                                // this.eventEntryForm.get('reference')?.value,
                                )
    this.eventDataService.create(formData)
          .subscribe({
            next: () => {
              this.eventDataService.onNewEntry(true);
            },
            error: (err) => console.log(err),
            complete: () => {}
          })

  }

  addReference(event): void {
    // this.eventEntryForm.get('images')?.value,
    event.stopPropagation();
    let reference = this.eventEntryForm.get('reference')?.value;

    this.eventReferences.push(reference)
  }

  addImageUrl(event): void {
    event.stopPropagation();
    let url = this.eventEntryForm.get('imageUrl')?.value;
    this.imageUrls.push(url);
  }
}
