import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

// Model
import { Countries } from './sidebar/country.model';


// Constant Variables
const _url = 'https://covid-193.p.rapidapi.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "a0615c0aaamshc474c7dbacc3ce3p1a8716jsnfd133a261559"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }


  getCountries(): Observable<Countries[]>{
    return this._http.get<Countries[]>(_url + "countries", httpOptions);
  }
}
