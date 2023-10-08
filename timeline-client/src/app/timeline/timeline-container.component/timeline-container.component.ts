import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { forkJoin } from "rxjs";
import { Timeline } from "src/app/models/timeline.model";
import { CountryDataService } from "src/app/services/country-data.service";
import { TimelineDataService } from "src/app/services/timeline-data.service";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-timeline-container',
  templateUrl: './timeline-container.component.html',
  styleUrls: ['./timeline-container.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class TimelineContainerComponent implements OnInit {
  timelines:Timeline[] = [];
  isLocal: boolean;
  jsonContent: string;

  constructor(private timelineDataService: TimelineDataService, private countryDataService: CountryDataService) {

  }

  ngOnInit(): void {
    this.isLocal = environment.name === 'local';

    if (this.isLocal) {
      forkJoin([
        this.countryDataService.getCountries(),
        this.timelineDataService.getTimelines()
      ])
        .subscribe({
          next: ([countries, timelines]) => {
            this.timelines = timelines;
            this.timelines.forEach(t => {
              t.events.forEach(e => {
                const country = countries.find(c => c.countryId === e.countryId);
                e.countryName = country.name;
                });
            });
          },
          complete: () => {
            // const bcTimelines = this.timelines.filter(x => x.era == "BC").sort((a,b) => a.centuryId);
            // const adTimelines = this.timelines.filter(x => x.era === "AD").sort((a,b) => a.centuryId);

            const bcTimelines = this.timelines.filter(x => x.era == "BC").sort((a,b) => a.centuryId >  b.centuryId ? -1 : 1);
            const adTimelines = this.timelines.filter(x => x.era === "AD").sort((a,b) => a.centuryId);

            this.timelines = bcTimelines.concat(adTimelines);
          }
        });
    } else {
      this.timelineDataService.getTimelines()
        .subscribe({
          next: (timelines) => {
            this.timelines = timelines;
          },
          complete: () => {
            const bcTimelines = this.timelines.filter(x => x.era == "BC").sort((a,b) => a.centuryId >  b.centuryId ? -1 : 1);
            const adTimelines = this.timelines.filter(x => x.era === "AD").sort((a,b) => a.centuryId);

            this.timelines = bcTimelines.concat(adTimelines);
          }
        });
    }
 }

 SaveToJsonFile(): void {
  this.jsonContent = JSON.stringify(this.timelines);
 }
}
