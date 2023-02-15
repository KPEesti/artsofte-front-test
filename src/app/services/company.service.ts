import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICompany} from "../models/company";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>('https://random-data-api.com/api/company/random_company?size=100');
  }

  getCompanyByID(id: number): Observable<ICompany> {
    return this.http.get<ICompany>(`https://random-data-api.com/api/company/random_company?id=${id}`);
  }
}
