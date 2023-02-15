import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICompany} from "../../models/company";
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyFilterService} from "../../services/company-filter.service";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent {

  @Input() companyList!: ICompany[];
  @Output() filters = new EventEmitter();

  setFilters() {
    this.filters.emit(this.filterForm);
  }

  filterForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    industry: new FormControl('')
  })

  constructor(public filterService: CompanyFilterService) {
  }
}
