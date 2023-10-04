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
    // return this.http.get<Timeline[]>(this.url, httpOptions);
    return this.http.get<Timeline[]>(this.url);
  }

  getJsonTestFile() : Timeline[] {
    return [
      {
        "centuryId": 600,
        "era": "BC",
        "events": [
          { "id": 1, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 2, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 3, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 4, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 5, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 6, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 7, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] },
          { "id": 8, "era": "BC", "year": 673, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "India", "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] }
        ]
      },
      {
        "centuryId": 500,
        "era": "BC",
        "events": [
          { "id": 88, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 9, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of some other guy", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 10, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Founding of some monastery", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 11, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 12, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 13, "era": "BC", "year": 563, "eventDate": "March 10, 1959", "title": "Birth of Buddha Shakyamuni", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
        ]
      },
      {
        "centuryId": 400,
        "era": "BC",
        "events": [{ "id": 14, "era": "BC", "year": 452, "eventDate": "March 10, 1959", "title": "Ming dynasty consolidation", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 300,
        "era": "BC",
        "events": [{ "id": 15, "era": "BC", "year": 342, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 200,
        "era": "BC",
        "events": [
          { "id": 16, "era": "BC", "year": 212, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 17, "era": "BC", "year": 212, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 18, "era": "BC", "year": 212, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
        ]
      },
      {
        "centuryId": 100,
        "era": "BC",
        "events": [{ "id": 19, "era": "BC", "year": 113, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 1,
        "era": "BC",
        "events": [{ "id": 20, "era": "BC", "year": 79, "eventDate": "March 10, 1959", "title": "Birth of Sponge Bob", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 1,
        "era": "AD",
        "events": [{ "id": 21, "era": "AD", "year": 12, "eventDate": "March 10, 1959", "title": "Birth of Jesus", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 100,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 200,
        "era": "AD",
        "events": [{ "id": 22, "era": "AD", "year": 256, "eventDate": "March 10, 1959", "title": "256 Birth of Foo Tsenpo lljl afakkj adfllll df af lasdfj alfjalfjlj saf llalsf lal ", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 300,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 400,
        "era": "AD",
        "events": [{ "id": 23, "era": "AD", "year": 436, "eventDate": "March 10, 1959", "title": "436 Birth of Foo Tsenpo", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 500,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 600,
        "era": "AD",
        "events": [
          { "id": 24, "era": "AD", "year": 655, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 25, "era": "AD", "year": 656, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 26, "era": "AD", "year": 657, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 27, "era": "AD", "year": 658, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
          { "id": 28, "era": "AD", "year": 659, "eventDate": "March 10, 1959", "title": "655 Birth of Foo Tsenpo", "country": "China",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]},
        ]
      },
      {
        "centuryId": 700,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 800,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 900,
        "era": "AD",
        "events": [{ "id": 29, "era": "AD", "year": 956, "eventDate": "March 10, 1959", "title": "956 Birth of Foo Tsenpo", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"] }]
      },
      {
        "centuryId": 1000,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 1100,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 1200,
        "era": "AD",
        "events": [{ "id": 30, "era": "AD", "year": 1256, "eventDate": "March 10, 1959", "title": "1234 Birth of Foo Tsenpo", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 1300,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 1400,
        "era": "AD",
        "events": [{ "id": 31, "era": "AD", "year": 1426, "eventDate": "March 10, 1959", "title": "1434 Birth of Foo Tsenpo", "country": "Tibet",  "description": "Here is the description of the event", "images": ["../assets/Buddha.jpg"], "references": ["http://www.wikipedia.com"]}]
      },
      {
        "centuryId": 1500,
        "era": "AD",
        "events": []
      }
    ]
  }
}
