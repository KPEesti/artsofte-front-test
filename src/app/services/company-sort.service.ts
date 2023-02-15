import {Injectable} from '@angular/core';
import {ICompany} from "../models/company";

export enum SortDir {
  asc = 1,
  desc = -1
}

@Injectable({
  providedIn: 'root'
})
export class CompanySortService {
  sortField: string = 'business_name';
  sortDir: SortDir = SortDir.asc;

  sortCompanies(arr: ICompany[]): void {
    arr.sort((a, b) => {
      type ObjectKey = keyof typeof a;
      return a[this.sortField as ObjectKey].toString().localeCompare(b[this.sortField as ObjectKey].toString()) * this.sortDir;
    })
  }
}
