import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { Company } from './redux/types/company';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  loadCompanies(): Observable<Company[]> {
    return this.httpClient.get(`${this.API_BASE}/company`)
    .pipe(
      map((data: Company[]) => data),
      catchError((error) => throwError(error))
    )
  }

}
