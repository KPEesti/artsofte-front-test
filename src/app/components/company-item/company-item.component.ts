import {Component, Input} from '@angular/core';
import {ICompany} from "../../models/company";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent {
  @Input() company!: ICompany;
}
