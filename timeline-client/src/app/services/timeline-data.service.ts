import { Injectable } from "@angular/core";
import { Timeline } from "../models/timeline.model";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  Headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' as 'response'
}

@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {
  constructor(private http: HttpClient){}

  getTimelines(): Observable<Timeline[]> {
    return of(this.getJsonTestFile());
    // return this.http.get<TimelineEvents[]>(this.url, httpOptions);
  }

  getJsonTestFile() : Timeline[] {
    return [
      {
        "centuryId": 600,
        "era": "BC",
        "events": [
          { "id": 1, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 2, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 3, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 4, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 5, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 6, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 7, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" },
          { "id": 8, "era": "BC", "year": 673, "title": "Birth of Jesus", "country": "India", "eventTypeId": 1,"description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" }
        ]
      },
      {
        "centuryId": 500,
        "era": "BC",
        "events": [
          { "id": 88, "era": "BC", "year": 563, "title": "Birth of Buddha Shakyamuni", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 9, "era": "BC", "year": 563, "title": "Birth of some other guy", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 10, "era": "BC", "year": 563, "title": "Founding of some monastery", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 11, "era": "BC", "year": 563, "title": "Birth of Buddha Shakyamuni", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 12, "era": "BC", "year": 563, "title": "Birth of Buddha Shakyamuni", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 13, "era": "BC", "year": 563, "title": "Birth of Buddha Shakyamuni", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
        ]
      },
      {
        "centuryId": 400,
        "era": "BC",
        "events": [{ "id": 14, "era": "BC", "year": 452, "title": "Ming dynasty consolidation", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 300,
        "era": "BC",
        "events": [{ "id": 15, "era": "BC", "year": 342, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 200,
        "era": "BC",
        "events": [
          { "id": 16, "era": "BC", "year": 212, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 17, "era": "BC", "year": 212, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 18, "era": "BC", "year": 212, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
        ]
      },
      {
        "centuryId": 100,
        "era": "BC",
        "events": [{ "id": 19, "era": "BC", "year": 113, "title": "Birth of Jesus", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 1,
        "era": "BC",
        "events": [{ "id": 20, "era": "BC", "year": 79, "title": "Birth of Sponge Bob", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 1,
        "era": "AD",
        "events": [{ "id": 21, "era": "AD", "year": 12, "title": "Birth of Jesus", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 100,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 200,
        "era": "AD",
        "events": [{ "id": 22, "era": "AD", "year": 256, "title": "256 Birth of Foo Tsenpo lljl afakkj adfllll df af lasdfj alfjalfjlj saf llalsf lal ", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 300,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 400,
        "era": "AD",
        "events": [{ "id": 23, "era": "AD", "year": 436, "title": "436 Birth of Foo Tsenpo", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
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
          { "id": 24, "era": "AD", "year": 655, "title": "655 Birth of Foo Tsenpo", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 25, "era": "AD", "year": 656, "title": "655 Birth of Foo Tsenpo", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 26, "era": "AD", "year": 657, "title": "655 Birth of Foo Tsenpo", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 27, "era": "AD", "year": 658, "title": "655 Birth of Foo Tsenpo", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
          { "id": 28, "era": "AD", "year": 659, "title": "655 Birth of Foo Tsenpo", "country": "China", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"},
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
        "events": [{ "id": 29, "era": "AD", "year": 956, "title": "956 Birth of Foo Tsenpo", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg" }]
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
        "events": [{ "id": 30, "era": "AD", "year": 1256, "title": "1234 Birth of Foo Tsenpo", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 1300,
        "era": "AD",
        "events": []
      },
      {
        "centuryId": 1400,
        "era": "AD",
        "events": [{ "id": 31, "era": "AD", "year": 1426, "title": "1434 Birth of Foo Tsenpo", "country": "Tibet", "eventTypeId": 1, "description": "Here is the description of the event", "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg"}]
      },
      {
        "centuryId": 1500,
        "era": "AD",
        "events": []
      }
    ]
  }
}
