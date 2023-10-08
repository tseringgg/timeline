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
    if (environment.name === 'local') {
      return of(this.getJsonTestFile());
      // return this.http.get<Timeline[]>(this.url);
    } else {
    return of(this.getJsonTestFile());
    }
  }

  getJsonTestFile() : Timeline[] {
    return [
      {
        "timelineId": 36,
        "era": "BC",
        "centuryId": 3500,
        "events": []
      },
      {
        "timelineId": 35,
        "era": "BC",
        "centuryId": 3400,
        "events": []
      },
      {
        "timelineId": 34,
        "era": "BC",
        "centuryId": 3300,
        "events": []
      },
      {
        "timelineId": 33,
        "era": "BC",
        "centuryId": 3200,
        "events": []
      },
      {
        "timelineId": 32,
        "era": "BC",
        "centuryId": 3100,
        "events": []
      },
      {
        "timelineId": 31,
        "era": "BC",
        "centuryId": 3000,
        "events": []
      },
      {
        "timelineId": 30,
        "era": "BC",
        "centuryId": 2900,
        "events": []
      },
      {
        "timelineId": 29,
        "era": "BC",
        "centuryId": 2800,
        "events": []
      },
      {
        "timelineId": 28,
        "era": "BC",
        "centuryId": 2700,
        "events": []
      },
      {
        "timelineId": 27,
        "era": "BC",
        "centuryId": 2600,
        "events": []
      },
      {
        "timelineId": 26,
        "era": "BC",
        "centuryId": 2500,
        "events": []
      },
      {
        "timelineId": 25,
        "era": "BC",
        "centuryId": 2400,
        "events": []
      },
      {
        "timelineId": 24,
        "era": "BC",
        "centuryId": 2300,
        "events": []
      },
      {
        "timelineId": 23,
        "era": "BC",
        "centuryId": 2200,
        "events": []
      },
      {
        "timelineId": 22,
        "era": "BC",
        "centuryId": 2100,
        "events": []
      },
      {
        "timelineId": 20,
        "era": "BC",
        "centuryId": 2000,
        "events": []
      },
      {
        "timelineId": 19,
        "era": "BC",
        "centuryId": 1900,
        "events": []
      },
      {
        "timelineId": 18,
        "era": "BC",
        "centuryId": 1800,
        "events": []
      },
      {
        "timelineId": 17,
        "era": "BC",
        "centuryId": 1700,
        "events": []
      },
      {
        "timelineId": 16,
        "era": "BC",
        "centuryId": 1600,
        "events": []
      },
      {
        "timelineId": 15,
        "era": "BC",
        "centuryId": 1500,
        "events": []
      },
      {
        "timelineId": 14,
        "era": "BC",
        "centuryId": 1400,
        "events": []
      },
      {
        "timelineId": 13,
        "era": "BC",
        "centuryId": 1300,
        "events": []
      },
      {
        "timelineId": 12,
        "era": "BC",
        "centuryId": 1200,
        "events": []
      },
      {
        "timelineId": 11,
        "era": "BC",
        "centuryId": 1100,
        "events": []
      },
      {
        "timelineId": 10,
        "era": "BC",
        "centuryId": 1000,
        "events": []
      },
      {
        "timelineId": 9,
        "era": "BC",
        "centuryId": 900,
        "events": []
      },
      {
        "timelineId": 8,
        "era": "BC",
        "centuryId": 800,
        "events": []
      },
      {
        "timelineId": 7,
        "era": "BC",
        "centuryId": 700,
        "events": []
      },
      {
        "timelineId": 6,
        "era": "BC",
        "centuryId": 600,
        "events": []
      },
      {
        "timelineId": 5,
        "era": "BC",
        "centuryId": 500,
        "events": []
      },
      {
        "timelineId": 4,
        "era": "BC",
        "centuryId": 400,
        "events": [
          {
            "eventId": 4,
            "title": "Nyatri Tsenpo",
            "description": "aljf a ljaf",
            "era": "BC",
            "countryId": 1,
            "year": 457,
            "timelineId": 4,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-05T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-18T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 3,
        "era": "BC",
        "centuryId": 300,
        "events": []
      },
      {
        "timelineId": 2,
        "era": "BC",
        "centuryId": 200,
        "events": []
      },
      {
        "timelineId": 21,
        "era": "BC",
        "centuryId": 100,
        "events": []
      },
      {
        "timelineId": 1,
        "era": "BC",
        "centuryId": 1,
        "events": [
          {
            "eventId": 3,
            "title": "Jesus was born",
            "description": "adfaf",
            "era": "BC",
            "countryId": 2,
            "year": 1,
            "timelineId": 1,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-05T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-26T00:00:00",
            "images": [],
            "references": [],
            "countryName": "China"
          }
        ]
      },
      {
        "timelineId": 37,
        "era": "AD",
        "centuryId": 1,
        "events": [
          {
            "eventId": 5,
            "title": "Foo was forn",
            "description": "dfaff",
            "era": "AD",
            "countryId": 1,
            "year": 22,
            "timelineId": 37,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-13T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 38,
        "era": "AD",
        "centuryId": 100,
        "events": [
          {
            "eventId": 6,
            "title": "Dingo Fras",
            "description": "adfaf",
            "era": "AD",
            "countryId": 1,
            "year": 133,
            "timelineId": 38,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-19T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 39,
        "era": "AD",
        "centuryId": 200,
        "events": [
          {
            "eventId": 8,
            "title": "safaf",
            "description": "fgdggg fgdg",
            "era": "AD",
            "countryId": 1,
            "year": 233,
            "timelineId": 39,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-19T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 40,
        "era": "AD",
        "centuryId": 300,
        "events": [
          {
            "eventId": 12,
            "title": "dfsfsdg",
            "description": "ggdddd",
            "era": "AD",
            "countryId": 1,
            "year": 343,
            "timelineId": 40,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-13T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 41,
        "era": "AD",
        "centuryId": 400,
        "events": [
          {
            "eventId": 10,
            "title": "adasfas",
            "description": "fsgsgs",
            "era": "AD",
            "countryId": 1,
            "year": 444,
            "timelineId": 41,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-14T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 42,
        "era": "AD",
        "centuryId": 500,
        "events": [
          {
            "eventId": 11,
            "title": "sdffddg ",
            "description": "fdffdg",
            "era": "AD",
            "countryId": 1,
            "year": 554,
            "timelineId": 42,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-21T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 43,
        "era": "AD",
        "centuryId": 600,
        "events": [
          {
            "eventId": 1,
            "title": "Birth of Jesus",
            "description": "You can use the target=\"_blank\" attribute if you want your users to click on a link that opens up a new browser tab. The target=\"_blank\" attribute is used lkalskf sdljsl l ladsf alfjl dafljlfasfj dsafljl l adfjlj inside the opening anchor tag like this",
            "era": "AD",
            "countryId": 2,
            "year": 653,
            "timelineId": 43,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-04T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-20T00:00:00",
            "images": [],
            "references": [],
            "countryName": "China"
          },
          {
            "eventId": 2,
            "title": "Songtsen Gamp Reign",
            "description": "You can use the target=\"_blank\" attribute if you want your users to click on a link that opens up a new browser tab. The target=\"_blank\" attribute is used lkalskf sdljsl l ladsf alfjl dafljlfasfj dsafljl l adfjlj inside the opening anchor tag like this",
            "era": "AD",
            "countryId": 1,
            "year": 657,
            "timelineId": 43,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-05T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-19T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          },
          {
            "eventId": 13,
            "title": "Ligmincha",
            "description": "Last king of Shangshung",
            "era": "AD",
            "countryId": 1,
            "year": 678,
            "timelineId": 43,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-21T00:00:00",
            "images": [
              {
                "imageId": 1,
                "imageUrl": "http://www.kikisoso.com/assets/Buddha.1d66e6ccfaf519ebf66899d5db28ff76.jpg",
                "eventId": 13
              }
            ],
            "references": [
              {
                "referenceId": 1,
                "eventId": 13,
                "url": "https://www.google.com/search?q=wikipedia+ligmincha&rlz=1C1RXQR_enUS984US984&oq=wikipedia+ligmincha&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBCTExMDgzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&bshm=rimc/1#ip=1"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 44,
        "era": "AD",
        "centuryId": 700,
        "events": []
      },
      {
        "timelineId": 45,
        "era": "AD",
        "centuryId": 800,
        "events": [
          {
            "eventId": 7,
            "title": "Drigum Tsenpo",
            "description": "Bonpo destruction",
            "era": "AD",
            "countryId": 1,
            "year": 877,
            "timelineId": 45,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-26T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 46,
        "era": "AD",
        "centuryId": 900,
        "events": []
      },
      {
        "timelineId": 47,
        "era": "AD",
        "centuryId": 1000,
        "events": [
          {
            "eventId": 14,
            "title": "Dragpa Lingpa",
            "description": "This saint scholar is well understood as the most reliable source",
            "era": "AD",
            "countryId": 1,
            "year": 1033,
            "timelineId": 47,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-20T00:00:00",
            "images": [
              {
                "imageId": 2,
                "imageUrl": "http://www.kikisoso.com/assets/1_Buddha_2.060c5c892ba805a2a4e99aad272a9234.jpg",
                "eventId": 14
              }
            ],
            "references": [
              {
                "referenceId": 2,
                "eventId": 14,
                "url": "https://www.facebook.com/garudawarszawa/posts/419132221513288/?paipv=0&eav=AfZbZ3-0yvhmefS3vdL-I6ql1MKafZt7dV5EZbqg7IGc21ntjVhg169dtFtWgTzAiSo&_rdr"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 48,
        "era": "AD",
        "centuryId": 1100,
        "events": []
      },
      {
        "timelineId": 49,
        "era": "AD",
        "centuryId": 1200,
        "events": []
      },
      {
        "timelineId": 50,
        "era": "AD",
        "centuryId": 1300,
        "events": []
      },
      {
        "timelineId": 51,
        "era": "AD",
        "centuryId": 1400,
        "events": []
      },
      {
        "timelineId": 52,
        "era": "AD",
        "centuryId": 1500,
        "events": []
      },
      {
        "timelineId": 53,
        "era": "AD",
        "centuryId": 1600,
        "events": []
      },
      {
        "timelineId": 54,
        "era": "AD",
        "centuryId": 1700,
        "events": []
      },
      {
        "timelineId": 55,
        "era": "AD",
        "centuryId": 1800,
        "events": []
      },
      {
        "timelineId": 56,
        "era": "AD",
        "centuryId": 1900,
        "events": [
          {
            "eventId": 9,
            "title": "afasf",
            "description": "gdgdg",
            "era": "AD",
            "countryId": 1,
            "year": 1943,
            "timelineId": 56,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-06T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": "2023-10-20T00:00:00",
            "images": [],
            "references": [],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 57,
        "era": "AD",
        "centuryId": 2000,
        "events": []
      },
      {
        "timelineId": 58,
        "era": "AD",
        "centuryId": 2100,
        "events": []
      }
    ]
  }
}
