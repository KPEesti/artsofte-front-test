import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyListComponent} from "./pages/company-list/company-list.component";
import {CompanyDetailComponent} from "./pages/company-detail/company-detail.component";
import {CompanyMapComponent} from "./pages/company-map/company-map.component";

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: "full"},
  {path: 'list', component: CompanyListComponent, title: 'Company List'},
  {path: 'detail/:id', component: CompanyDetailComponent, title: 'Company Detail'},
  {path: 'map', component: CompanyMapComponent, title: 'Company Map'},
  {path: '**', redirectTo: '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
