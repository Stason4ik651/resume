import { Injectable } from '@angular/core';
import { Film } from '../shared/interfaces/film';
import { Genres } from '../shared/interfaces/genres';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  films!: Film[];
  selectedMovie!: Film;
  popup = false;

  private _genres!: [Genres];
  private _totalPerPage!: number;
  private _totalCount!: number;
  private _totalPages!: number;

  get genres(): [Genres] {
    return this._genres;
  }

  set genres(value: [Genres]) {
    this._genres = value;
  }

  // get totalPerPage(): number {
  //   return this._totalPerPage;
  // }
  //
  // set totalPerPage(value: number) {
  //   this._totalPerPage = value;
  // }

  get totalCount(): number {
    return this._totalCount;
  }

  set totalCount(value: number) {
    this._totalCount = value;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value > 500 ? 500 : value;
  }

  convertIdsToGenres(genreIds: number[]) {
    return genreIds.map((id: number) => this._genres[id]).join(', ');
  }
}
