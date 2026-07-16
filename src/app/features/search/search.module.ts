import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { FiltersComponent } from './filters/filters.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    FiltersComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
