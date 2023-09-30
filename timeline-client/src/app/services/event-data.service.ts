import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, pipe, Subject, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { NewEvent, TimelineEvent } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  baseUrl = `${environment.rootApiUrl}api/Events`;
  constructor(private _httpClient: HttpClient) {}
  private newEventEntrySubmittedSubject = new Subject<boolean>();
  newEventEntrySubmitSubject$ = this.newEventEntrySubmittedSubject as Observable<boolean>;

  get(): Observable<TimelineEvent[]> {
    // return this._httpClient.get<EventModel[]>(this.baseUrl);

    const eventsList = [
          // new EventModel(1, "Birth of Jesus", "", 0, "Jerusalem"),
          // new EventModel(2, "Birth of Buddha", "BC", 564, "India"),
          // new EventModel(3, "Birth of Guru Padmasambhava", "AD", 717, "India"),
          // new EventModel(4, "Birth of Je Tsongkhapa", "AD", 1357, "Tibet"),
          // new EventModel(5, "Birth of 14th Dalai Lama", "AD", 1935, "Tibet"),
          // new EventModel(6, "Birth of Songtsen Gampo", "AD", 617, "Tibet"),
          // new EventModel(7, "Birth of Nyamme Sherab Gyaltsen", "AD", 1356, "Tibet"),
          // new EventModel(8, "Birth of Sachen Kunga Nyingpo", "AD", 1092, "Tibet"),
          // new EventModel(9, "Birth of Garab Dorje", "AD", 665, "Tibet"),
          // new EventModel(9, "Birth of Nyatri Tsenpo", "BC", 127, "Tibet"),
          // new EventModel(9, "Birth of Bon Buddha Tonpa Shenrab", "BC", 16016, "Tibet"),
        ];

    return of(eventsList);
  }

  create(event: NewEvent): Observable<any> {
    return this._httpClient.post(this.baseUrl, event);
    //.pipe(tap(catchError(x => console.log(`Unexpected error: ${x}`))));
  }

  patch(id: number, event: TimelineEvent): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient.patch(url, event);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient.delete(url);
  }

  update(id: number, entity: TimelineEvent): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient.put(url, entity);
  }



  onNewEntry(success: boolean): void {
    this.newEventEntrySubmittedSubject.next(success);
  }
}
