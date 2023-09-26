import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../../services/data.service';
import { FiltersService } from '../../services/filters.service';
import { ResponseProcessService } from '../../services/response-process.service';
import { Film } from '../../shared/interfaces/film';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  film: Film = this.dataService.selectedMovie;
  genres: string = this.dataService.convertIdsToGenres(this.film.genreIds);
  trailerUrl!: SafeResourceUrl;

  constructor(
    public readonly dataService: DataService,
    public readonly filterService: FiltersService,
    public readonly responseService: ResponseProcessService,
    private sanitizer: DomSanitizer,
  ) {}

  async ngOnInit(): Promise<void> {
    this.filterService.popupId = this.film.id;

    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      await this.responseService.responseTrailer(),
    );
    console.log(this.trailerUrl);
  }
}
