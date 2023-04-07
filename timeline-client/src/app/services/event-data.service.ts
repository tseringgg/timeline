import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, pipe, Subject, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { EventModel } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  baseUrl = `${environment.rootApiUrl}api/Events`;
  constructor(private _httpClient: HttpClient) {}
  private newEventEntrySubmittedSubject = new Subject<boolean>();
  newEventEntrySubmitSubject$ = this.newEventEntrySubmittedSubject as Observable<boolean>;

  get(): Observable<EventModel[]> {
    // return this._httpClient.get<EventModel[]>(this.baseUrl);

    const eventsList = [
          new EventModel(1, "Death of Bob", "AD", 124),
          new EventModel(2, "hfeianfeja", "BC", 111),
          new EventModel(3, "Birth of Christ aflj alsfj adfljl adflj adsflj asdfl", "BC", 840),
          new EventModel(4, "Birth of Christ", "BC", 1234),
          new EventModel(5, "Birth of Christ", "BC", 2015),
          new EventModel(5, "Birth of Christ", "AD", 2015),
          new EventModel(5, "Jarl Borg was born", "AD", 1841),
          new EventModel(5, "Hogan Logan was born", "AD", 1847),
        ];

    return of(eventsList);
  }

  create(event: EventModel): Observable<any> {
    return this._httpClient.post(this.baseUrl, event);
    //.pipe(tap(catchError(x => console.log(`Unexpected error: ${x}`))));
  }

  patch(id: number, event: EventModel): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient.patch(url, event);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient.delete(url);
  }

  update(id: number, entity: EventModel): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient.put(url, entity);
  }



  onNewEntry(success: boolean): void {
    this.newEventEntrySubmittedSubject.next(success);
  }
}
