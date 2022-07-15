import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-event-entry',
  templateUrl: './event-entry.component.html',
  styleUrls: ['./event-entry.component.css']
})
export class EventEntryComponent implements OnInit {
  eventEntryForm: FormGroup;
  selectedEra: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eventEntryForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      era: ['', [Validators.required]],
      year: ['', [Validators.pattern("^[0-9]+$")]]
    });
  }

  save(): void {
    console.log(this.eventEntryForm)
  }
}
