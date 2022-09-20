import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay, Observable, of } from 'rxjs';
import { Portifolio } from '../model/portifolio';
import PortifolioJson from './robsonalves.json';

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  protected UrlServiceV1: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  obterPortifolioFile(): Observable<Portifolio> {
    return new Observable<Portifolio>(subscriber => {
      subscriber.next(PortifolioJson);
    });
  }

  obterPortifolioRest(): Observable<Portifolio[]> {
    return this.http
      .get<Portifolio[]>(this.UrlServiceV1 + "portifolio");
  }
}
