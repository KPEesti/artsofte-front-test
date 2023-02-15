import {Component, OnInit} from '@angular/core';
import {ICompany} from "../../models/company";
import {CompanyService} from "../../services/company.service";
import {map} from "rxjs";
import {CompanySortService} from "../../services/company-sort.service";
import {CompanyFilterService} from "../../services/company-filter.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  loading: boolean = false;
  companyList: ICompany[] = [];
  filteredList: ICompany[] = [];

  constructor(private companiesService: CompanyService, private filterService: CompanyFilterService) {
  }

  setFilters(a: any) {
    this.filteredList = this.filterService.filterCompanies(this.companyList, a.controls);
  }

  ngOnInit(): void {
    this.loading = true;
    this.companiesService.getCompanies().subscribe(list => {
      this.companyList = list;
      this.filteredList = list;
      this.filterService.setFiltersOptions(list);
      this.loading = false;
    });
  }
}
