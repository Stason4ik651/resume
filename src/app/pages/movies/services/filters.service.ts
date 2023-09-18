import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private _title = '';
  private _year = '';
  private _page = 1;
  private _apiKey = '5874acfd11651a28c55771624f7021f4';
  private _language = 'en-US';

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get toQuery() {
    let query = this.staticParams + `&page=${this._page}`;

    if (this._title) query += `&query=${this._title}`;

    if (this._year) {
      query += this._title
        ? `&primary_release_year=${this._year}`
        : `&primary_release_date.gte=${this._year}-01-01&primary_release_date.lte=${this._year}-12-31`;
    }

    return query;
  }

  get staticParams() {
    return `?api_key=${this._apiKey}&language=${this._language}`;
  }
}
