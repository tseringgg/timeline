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
      //return this.http.get<Timeline[]>(this.url);
    } else {
    return of(this.getJsonTestFile());
    }
  }

  getJsonTestFile() : Timeline[] {
    return [
      {
        "timelineId": 183,
        "era": "BC",
        "centuryId": 16000,
        "events": [
          {
            "eventId": 63,
            "title": "Birth of Bon Buddha Tonpa Shenrab",
            "description": "It is widely believed in the Bon religion that Shenrab was born 16,016 years ago (B.C) in Olmo Lungring (called Tagzig at the time). He lived for 81 Shen years or 8,100 human years throughout which he taught the fundamentals of Bon.",
            "era": "BC",
            "countryId": 1,
            "year": 16016,
            "timelineId": 183,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 63,
                "imageUrl": "https://boninfo.org/tv/1777/300129/2015217/view/fotoc9e235ef6211297f2989fc119728a3e5.Shenrab23.jpeg",
                "eventId": 63
              }
            ],
            "references": [
              {
                "referenceId": 66,
                "eventId": 63,
                "url": "https://tibetanculture.weai.columbia.edu/the-twelve-deeds-a-brief-life-story-of-tonpa-shenrab/"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 48,
        "era": "BC",
        "centuryId": 2500,
        "events": [
          {
            "eventId": 62,
            "title": "Great Pyramid of Giza, was built by the pharaoh Khufu",
            "description": "The Great Pyramid of Giza is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. Built in the early 26th century BC, over a period of about 27 years.",
            "era": "BC",
            "countryId": 16,
            "year": 2580,
            "timelineId": 48,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 62,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/450px-Kheops-Pyramid.jpg",
                "eventId": 62
              }
            ],
            "references": [
              {
                "referenceId": 65,
                "eventId": 62,
                "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
              }
            ],
            "countryName": "North Africa"
          }
        ]
      },
      {
        "timelineId": 34,
        "era": "BC",
        "centuryId": 1100,
        "events": [
          {
            "eventId": 48,
            "title": "Nyatri Tsenpo, the first annointed king of Tibet ",
            "description": "This began the lineage of 34 Kings of the Yarlung dynasty. Yungdrung Bon teachings flourished, and lamas of the Zhang Zhung empire acted as the Royal Bön Shen. Due to political conflict, Drigum Tsenpo, the 8th king, however attempted to suppress Yungdrung Bon practice. Nevertheless, Bon religion flourished and during the 29th king of Tibet many Bon Shen were invited to Tibet from Zhang Zhung strengthening ties betwee the two countries.",
            "era": "BC",
            "countryId": 1,
            "year": 1136,
            "timelineId": 34,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 48,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Ni%C3%A8ch%C3%AC_Z%C3%A0np%C7%94.JPG",
                "eventId": 48
              }
            ],
            "references": [
              {
                "referenceId": 51,
                "eventId": 48,
                "url": "https://ravencypresswood.com/2016/12/11/tibetan-kings-of-the-yarlung-dynasty-the-yungdrung-bon/"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 29,
        "era": "BC",
        "centuryId": 600,
        "events": [
          {
            "eventId": 45,
            "title": "Birth of Shakyamuni Buddha",
            "description": "The Lord Buddha was born in 623 BC in the sacred area of Lumbini located in the Terai plains of southern Nepal, testified by the inscription on the pillar erected by the Mauryan Emperor Asoka in 249 BC.",
            "era": "BC",
            "countryId": 4,
            "year": 623,
            "timelineId": 29,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 45,
                "imageUrl": "https://whc.unesco.org/uploads/thumbs/site_0666_0001-750-750-20120922112601.jpg",
                "eventId": 45
              }
            ],
            "references": [
              {
                "referenceId": 48,
                "eventId": 45,
                "url": "https://whc.unesco.org/en/list/666/"
              }
            ],
            "countryName": "Nepal"
          }
        ]
      },
      {
        "timelineId": 26,
        "era": "BC",
        "centuryId": 300,
        "events": [
          {
            "eventId": 56,
            "title": "Alexander the Great reaches North West India.",
            "description": "Alexander the Great reaches North West India. The Indo-Greek Kingdom that arise in the aftermath has a large influence upon the development of Buddhism.[7]",
            "era": "BC",
            "countryId": 3,
            "year": 326,
            "timelineId": 26,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 56,
                "imageUrl": "",
                "eventId": 56
              }
            ],
            "references": [
              {
                "referenceId": 59,
                "eventId": 56,
                "url": "https://en.wikipedia.org/wiki/Timeline_of_Buddhism"
              }
            ],
            "countryName": "India"
          }
        ]
      },
      {
        "timelineId": 25,
        "era": "BC",
        "centuryId": 200,
        "events": [
          {
            "eventId": 57,
            "title": "Theravada is officially introduced to Sri Lanka",
            "description": "Theravada is officially introduced to Sri Lanka by the Mahinda, son of Ashoka, during the reign of Devanampiya Tissa of Anuradhapura.",
            "era": "BC",
            "countryId": 9,
            "year": 220,
            "timelineId": 25,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 57,
                "imageUrl": "",
                "eventId": 57
              }
            ],
            "references": [
              {
                "referenceId": 60,
                "eventId": 57,
                "url": "https://en.wikipedia.org/wiki/Timeline_of_Buddhism"
              }
            ],
            "countryName": "Sri Lanka"
          },
          {
            "eventId": 58,
            "title": "Ashoka sends Buddhist missionaries to China and many countries",
            "description": "Ashoka sends various Buddhist missionaries to faraway countries, as far as China, mainland Southeast Asia and the Malay kingdoms in the east and the Hellenistic kingdoms in the west, in order to make Buddhism known to them",
            "era": "BC",
            "countryId": 3,
            "year": 250,
            "timelineId": 25,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 58,
                "imageUrl": "",
                "eventId": 58
              }
            ],
            "references": [
              {
                "referenceId": 61,
                "eventId": 58,
                "url": "https://en.wikipedia.org/wiki/Timeline_of_Buddhism"
              }
            ],
            "countryName": "India"
          },
          {
            "eventId": 61,
            "title": "Introduction of Buddhism in China",
            "description": "Buddhism was first introduced to China during the Han Dynasty (202 BCE–220 CE)",
            "era": "BC",
            "countryId": 2,
            "year": 202,
            "timelineId": 25,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 61,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2016-05-21_Luoyang_Longmen_Grottoes_anagoria_10.JPG/390px-2016-05-21_Luoyang_Longmen_Grottoes_anagoria_10.JPG",
                "eventId": 61
              }
            ],
            "references": [
              {
                "referenceId": 64,
                "eventId": 61,
                "url": "https://en.wikipedia.org/wiki/Chinese_Buddhism"
              }
            ],
            "countryName": "China"
          }
        ]
      },
      {
        "timelineId": 23,
        "era": "BC",
        "centuryId": 1,
        "events": [
          {
            "eventId": 44,
            "title": "Birth of Jesus",
            "description": "The date of birth of Jesus is not stated in the gospels or in any historical sources, but most biblical scholars generally accept a date of birth between 6 BC and 4 BC, the year in which King Herod died",
            "era": "BC",
            "countryId": 8,
            "year": 4,
            "timelineId": 23,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 44,
                "imageUrl": "https://en.wikipedia.org/wiki/File:The_Nativity_Robert_Campin.jpg",
                "eventId": 44
              }
            ],
            "references": [
              {
                "referenceId": 47,
                "eventId": 44,
                "url": "https://en.wikipedia.org/wiki/Date_of_birth_of_Jesus#:~:text=The%20date%20of%20birth%20of,in%20which%20King%20Herod%20died."
              }
            ],
            "countryName": "Israel"
          }
        ]
      },
      {
        "timelineId": 2,
        "era": "AD",
        "centuryId": 100,
        "events": [
          {
            "eventId": 46,
            "title": "Birth of Thothori Nyantsen, 28th King of Tibet.",
            "description": "Birth of Thothori Nyantsen, 28th King of Tibet.",
            "era": "AD",
            "countryId": 1,
            "year": 173,
            "timelineId": 2,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 46,
                "imageUrl": "http://www.kikisoso.com/assets/NyammeWelcome.f24f26bd2d621ea093c6bcf7147f7b98.jpg",
                "eventId": 46
              }
            ],
            "references": [
              {
                "referenceId": 49,
                "eventId": 46,
                "url": "https://en.wikipedia.org/wiki/Timeline_of_Tibetan_history"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 3,
        "era": "AD",
        "centuryId": 200,
        "events": [
          {
            "eventId": 47,
            "title": "Nyantsen receives a Buddhist scripture",
            "description": "Nyantsen receives a Buddhist scripture, marking the initial introduction of Buddhism into Tibet (Currency from this event was dated).",
            "era": "AD",
            "countryId": 1,
            "year": 233,
            "timelineId": 3,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 47,
                "imageUrl": "http://www.kikisoso.com/assets/NyammeWelcome.f24f26bd2d621ea093c6bcf7147f7b98.jpg",
                "eventId": 47
              }
            ],
            "references": [
              {
                "referenceId": 50,
                "eventId": 47,
                "url": "https://en.wikipedia.org/wiki/Timeline_of_Tibetan_history"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 7,
        "era": "AD",
        "centuryId": 600,
        "events": [
          {
            "eventId": 49,
            "title": "Namri Songtsan, 34th king of Yarlung",
            "description": "King Namri Songtsan (father of king Songtsen Gampo) of Yarlung, the territory south of the Tsangpo River, begins the unification of Tibet's many kingdoms. During his reign, Chinese influenced medicine and astrology were introduced into the country of Tibet.",
            "era": "AD",
            "countryId": 1,
            "year": 600,
            "timelineId": 7,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 49,
                "imageUrl": "https://ravencypresswood.com/2016/12/11/tibetan-kings-of-the-yarlung-dynasty-the-yungdrung-bon/",
                "eventId": 49
              }
            ],
            "references": [
              {
                "referenceId": 52,
                "eventId": 49,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          },
          {
            "eventId": 50,
            "title": "Songtsan Gampo (35th King of Tibet) introduces Buddhism to Tibet. ",
            "description": "Having already married three Tibetans princesses and a Nepalese princess, Brikuthi, he takes a Chinese princess, Wen-Ch'eng, as his bride, thus creating alliances with the countries to the west and east.",
            "era": "AD",
            "countryId": 1,
            "year": 641,
            "timelineId": 7,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 50,
                "imageUrl": "",
                "eventId": 50
              }
            ],
            "references": [
              {
                "referenceId": 53,
                "eventId": 50,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          },
          {
            "eventId": 51,
            "title": "Warfare breaks out between Tibet and the T'ang dynasty of China. ",
            "description": "Warfare breaks out between Tibet and the T'ang dynasty of China. Tibet gains influence along trade route through central Asia.",
            "era": "AD",
            "countryId": 1,
            "year": 670,
            "timelineId": 7,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 51,
                "imageUrl": "",
                "eventId": 51
              }
            ],
            "references": [
              {
                "referenceId": 54,
                "eventId": 51,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          },
          {
            "eventId": 60,
            "title": "Ligmincha, the last king of Shangshung kingdom",
            "description": "Ligmincha was assassinated by Songtsen Gampo who then annexed the Shangshung kingdom of western Tibet.",
            "era": "AD",
            "countryId": 1,
            "year": 645,
            "timelineId": 7,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 60,
                "imageUrl": "https://www.himalayanart.org/images/items/resized/535px/8/5/5/85500.jpg",
                "eventId": 60
              }
            ],
            "references": [
              {
                "referenceId": 63,
                "eventId": 60,
                "url": "https://en.wikipedia.org/wiki/Songtsen_Gampo"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 8,
        "era": "AD",
        "centuryId": 700,
        "events": [
          {
            "eventId": 52,
            "title": "Samye, first Buddhist monastic university,",
            "description": "Samye, first Buddhist monastic university, fifty miles south of Lhasa, founded by Padmasambhava. The Sanskrit Buddhist sutras and tantras--the Tripitaka--translated into Tibetan; establishment of the tantric meditation system.",
            "era": "AD",
            "countryId": 1,
            "year": 779,
            "timelineId": 8,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 52,
                "imageUrl": "",
                "eventId": 52
              }
            ],
            "references": [
              {
                "referenceId": 55,
                "eventId": 52,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          },
          {
            "eventId": 59,
            "title": "Tritsong Detsan (38th King of Tibet) was enthroned",
            "description": "Trisong Detsen was the son of Me Agtsom, the 38th emperor of Tibet. He ruled from AD 755 until 797 or 804. Tri Songdetsen was the second of the Three Dharma Kings of Tibet, playing a pivotal role in the introduction of Buddhism to Tibet and the establishment of the Nyingma or \"Ancient\" school of Tibetan Buddhism.",
            "era": "AD",
            "countryId": 1,
            "year": 755,
            "timelineId": 8,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 59,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Trisong_Detsen.jpg/330px-Trisong_Detsen.jpg",
                "eventId": 59
              }
            ],
            "references": [
              {
                "referenceId": 62,
                "eventId": 59,
                "url": "https://en.wikipedia.org/wiki/Trisong_Detsen"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 9,
        "era": "AD",
        "centuryId": 800,
        "events": [
          {
            "eventId": 53,
            "title": "Assassination of Langdarma by Buddhist monk. ",
            "description": "Assassination of Langdarma by Buddhist monk. Succession contested. Kingdom dissolves, leaving Tibet in a state of political upheaval.",
            "era": "AD",
            "countryId": 1,
            "year": 842,
            "timelineId": 9,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 53,
                "imageUrl": "",
                "eventId": 53
              }
            ],
            "references": [
              {
                "referenceId": 56,
                "eventId": 53,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          },
          {
            "eventId": 54,
            "title": "Langdarma succeeds Tritsug Detsan",
            "description": "Langdarma succeeds Tritsug Detsan and, under pressure from Bon priests, begins to suppress Buddhism in central Tibet, burning monasteries and driving out monks.",
            "era": "AD",
            "countryId": 1,
            "year": 836,
            "timelineId": 9,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 54,
                "imageUrl": "",
                "eventId": 54
              }
            ],
            "references": [
              {
                "referenceId": 57,
                "eventId": 54,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      },
      {
        "timelineId": 13,
        "era": "AD",
        "centuryId": 1200,
        "events": [
          {
            "eventId": 55,
            "title": "Tibetan leaders quietly submit to Genghis Khan.",
            "description": "Tibetan leaders quietly submit to Genghis Khan.",
            "era": "AD",
            "countryId": 1,
            "year": 1207,
            "timelineId": 13,
            "isReviewed": false,
            "isDeleted": false,
            "isApproved": false,
            "reviewerUserId": null,
            "reviewDate": null,
            "creatorUserId": 1,
            "createDate": "2023-10-30T00:00:00",
            "approverUserId": null,
            "approveDate": null,
            "lastUpdateDate": null,
            "lastUpdaterUserId": null,
            "eventDate": null,
            "images": [
              {
                "imageId": 55,
                "imageUrl": "",
                "eventId": 55
              }
            ],
            "references": [
              {
                "referenceId": 58,
                "eventId": 55,
                "url": "https://www.pbs.org/wgbh/pages/frontline/shows/tibet/etc/cron.html"
              }
            ],
            "countryName": "Tibet"
          }
        ]
      }
    ]
  }
}
