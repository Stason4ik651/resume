import { Injectable } from '@angular/core';
import { FiltersService } from './filters.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private _baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private filtersService: FiltersService) {}

  private get _genresUrl() {
    return (
      this._baseUrl + 'genre/movie/list' + this.filtersService.staticParams
    );
  }

  private get _moviesUrl() {
    const film = this.filtersService.title ? `search/movie` : `discover/movie`;
    return this._baseUrl + film + this.filtersService.toQuery;
  }

  async loadData() {
    const response = await fetch(this._moviesUrl);
    return await response.json();
  }

  async loadGenres() {
    const response = await fetch(this._genresUrl);
    return await response.json();
  }
}
