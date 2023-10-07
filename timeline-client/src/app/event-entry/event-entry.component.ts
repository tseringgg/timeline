import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NewEvent, Event } from '../models/event.model';
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
      country: ['', [Validators.required, Validators.maxLength(50)]],
      imageUrl: [''],
      reference: [''],
    });
  }

  save(): void {
    var formData = new NewEvent(this.eventEntryForm.get('title').value,
                                this.eventEntryForm.get('description').value,
                                this.eventEntryForm.get('era').value,
                                this.eventEntryForm.get('year').value,
                                this.eventEntryForm.get('eventDate')?.value,
                                this.eventEntryForm.get('country').value,
                                this.imageUrls,
                                this.eventReferences
                                )
    this.eventDataService.create(formData)
          .subscribe({
            next: () => {
              this.eventDataService.onNewEntry(true);
            },
            error: (err) => console.log(err),
            complete: () => {

            }
          })

  }

  addReference(event:MouseEvent): void {
    event.stopImmediatePropagation();
    event.preventDefault();

    let reference = this.eventEntryForm.get('reference')?.value;
    this.eventReferences.push(reference)
  }

  addImageUrl(event): void {
    event.stopImmediatePropagation();
    event.preventDefault();
    let url = this.eventEntryForm.get('imageUrl')?.value;
    if (!!url && !this.imageUrls.some(x => x === url)) {
      this.imageUrls.push(url);
    }
  }
}
