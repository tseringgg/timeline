import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Country } from "../models/country.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {
  url = `${environment.rootApiUrl}api/Countries`;
  constructor(private _httpClient: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.url);
  }
}
