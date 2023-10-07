import { Injectable } from "@angular/core";
import { Timeline } from "../models/timeline.model";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

const httpOptions = {
  Headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' as 'response'
}

@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {
  url: string = `${environment.rootApiUrl}api/Timelines`;
  constructor(private http: HttpClient){}

  getTimelines(): Observable<Timeline[]> {
    // return of(this.getJsonTestFile());

    return this.http.get<Timeline[]>(this.url);
  }

  getJsonTestFile() : Timeline[] {
    return [
      // {
      //   "timelineId": 1,
      //   "centuryId": 600,
      //   "era": "BC",
      //   "events": [
      //     { "eventId": 1, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event", "imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 2, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 3, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 4, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 5, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 6, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 7, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] },
      //     { "eventId": 8, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "India","description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] }
      //   ]
      // },
      // {
      //   "timelineId": 3,
      //   "centuryId": 500,
      //   "era": "BC",
      //   "events": [
      //     { "eventId": 88, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 9, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of some other guy", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 10, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Founding of some monastery", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 11, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 12, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 13, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //   ]
      // },
      // {
      //   "timelineId": 3,
      //   "centuryId": 400,
      //   "era": "BC",
      //   "events": [{ "eventId": 14, "era": "BC", "year": 452, "eventDate": "March 10, 1959", "title": "Ming dynasty consolidation", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 4,
      //   "centuryId": 300,
      //   "era": "BC",
      //   "events": [{ "eventId": 15, "era": "BC", "year": 342, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 5,
      //   "centuryId": 200,
      //   "era": "BC",
      //   "events": [
      //     { "eventId": 16, "era": "BC", "year": 212, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 17, "era": "BC", "year": 212, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 18, "era": "BC", "year": 212, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //   ]
      // },
      // {
      //   "timelineId": 6,
      //   "centuryId": 100,
      //   "era": "BC",
      //   "events": [{ "eventId": 19, "era": "BC", "year": 113, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 7,
      //   "centuryId": 1,
      //   "era": "BC",
      //   "events": [{ "eventId": 20, "era": "BC", "year": 79, "eventDate": "March 10, 1959", "title": "Birth of Sponge Bob", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 8,
      //   "centuryId": 1,
      //   "era": "AD",
      //   "events": [{ "eventId": 21, "era": "AD", "year": 12, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 9,
      //   "centuryId": 100,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 10,
      //   "centuryId": 200,
      //   "era": "AD",
      //   "events": [{ "eventId": 22, "era": "AD", "year": 256, "eventDate": "March 10, 1959", "title": "256 Birth of Foo Tsenpo lljl afakkj adfllll df af lasdfj alfjalfjlj saf llalsf lal ", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 11,
      //   "centuryId": 300,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 12,
      //   "centuryId": 400,
      //   "era": "AD",
      //   "events": [{ "eventId": 23, "era": "AD", "year": 436, "eventDate": "March 10, 1959", "title": "436 Birth of Foo Tsenpo", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 13,
      //   "centuryId": 500,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 14,
      //   "centuryId": 600,
      //   "era": "AD",
      //   "events": [
      //     { "eventId": 24, "era": "AD", "year": 655, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 25, "era": "AD", "year": 656, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 26, "era": "AD", "year": 657, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 27, "era": "AD", "year": 658, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //     { "eventId": 28, "era": "AD", "year": 659, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "countryId": 1, "countryName": "China", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]},
      //   ]
      // },
      // {
      //   "timelineId": 15,
      //   "centuryId": 700,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 16,
      //   "centuryId": 800,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 17,
      //   "centuryId": 900,
      //   "era": "AD",
      //   "events": [{ "eventId": 29, "era": "AD", "year": 956, "eventDate": "March 10, 1959", "title": "956 Birth of Foo Tsenpo", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"] }]
      // },
      // {
      //   "timelineId": 18,
      //   "centuryId": 1000,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 19,
      //   "centuryId": 1100,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 20,
      //   "centuryId": 1200,
      //   "era": "AD",
      //   "events": [{ "eventId": 30, "era": "AD", "year": 1256, "eventDate": "March 10, 1959", "title": "1234 Birth of Foo Tsenpo", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 21,
      //   "centuryId": 1300,
      //   "era": "AD",
      //   "events": []
      // },
      // {
      //   "timelineId": 22,
      //   "centuryId": 1400,
      //   "era": "AD",
      //   "events": [{ "eventId": 31, "era": "AD", "year": 1426, "eventDate": "March 10, 1959", "title": "1434 Birth of Foo Tsenpo", "countryId": 1, "countryName": "Tibet", "description": "Here is the description of the event","imageUrls": ["../assets/Buddha.jpg"], "referenceUrls": ["http://www.wikipedia.com"]}]
      // },
      // {
      //   "timelineId": 23,
      //   "centuryId": 1500,
      //   "era": "AD",
      //   "events": []
      // }
    ]
  }
}
