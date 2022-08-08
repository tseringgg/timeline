import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, pipe, Subject, tap } from "rxjs";
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
    return this._httpClient.get<EventModel[]>(this.baseUrl);
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
