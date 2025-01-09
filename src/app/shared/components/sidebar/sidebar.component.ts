import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { SearchBoxComponent } from '../../../gifs/components/search-box/search-box/search-box.component';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})



export class SidebarComponent {

  constructor(private gifsService: GifsService) {

  }

  get tags(): string[] {
    return this.gifsService.tagsHistory
  }

  searchTag( tag: string ): void {
    this.gifsService.searchTag(tag)
  }

}
