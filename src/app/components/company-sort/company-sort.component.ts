import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";
import {CompanySortService} from "../../services/company-sort.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent {
  @Input() companyList!: ICompany[];

  constructor(public sortService : CompanySortService) {
  }

  changeOption(val: string) {
    this.sortService.sortField = val;
    this.sortService.sortCompanies(this.companyList);
  }

  changeSortDir(val: number) {
    this.sortService.sortDir = val;
    this.sortService.sortCompanies(this.companyList);
  }
}
