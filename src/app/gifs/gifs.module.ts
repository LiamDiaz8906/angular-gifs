import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list/card-list.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SearchBoxComponent } from './components/search-box/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePagesComponent
  ]
})
export class GifsModule { }
