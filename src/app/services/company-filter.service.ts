import {Injectable} from '@angular/core';
import {ICompany} from "../models/company";
import {AbstractControl, FormControl, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CompanyFilterService {

  types = new Set<string>();
  industries = new Set<string>();

  setFiltersOptions(arr: ICompany[]): void {
    arr.forEach((company) => {
      this.types.add(company.type);
      this.industries.add(company.industry);
    })
  }

  filterCompanies(arr: ICompany[], filters: ɵTypedOrUntyped<{ name: FormControl<string | null>; industry: FormControl<string | null>; type: FormControl<string | null> }, { name: FormControl<string | null>; industry: FormControl<string | null>; type: FormControl<string | null> }, { [p: string]: AbstractControl<any> }>): ICompany[] {
    console.log('Filter Function');
    return arr.filter((company) => {
      return ((filters.name.dirty ? company.business_name.includes(filters.name.value!) : true) &&
        ((filters.type.value !== "") ? company.type === filters.type.value : true) &&
        ((filters.industry.value !== "") ? company.industry === filters.industry.value : true));
    })
  }

}
