import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  post(url: string, body: any): void {
    const observable = this.http.post(url, body);
    observable.subscribe(
      (val) => {
          alert('Verzoek geslaagd!');
        },
        response => {
          alert('Verzoek mislukt!');
        });
  }
}
