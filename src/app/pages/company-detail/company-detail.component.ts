import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {ICompany} from "../../models/company";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  loading: boolean = false;
  company!: ICompany;
  id!: number;

  constructor(public companyService: CompanyService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.companyService.getCompanyByID(this.id).subscribe(item => {
      this.company = item;
      this.loading = false;
    });
  }
}
