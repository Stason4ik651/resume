import { Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { ResponseProcessService } from '../../services/response-process.service';

@Component({
  selector: 'app-header-movies',
  templateUrl: './header-movies.component.html',
  styleUrls: ['./header-movies.component.css'],
})
export class HeaderMoviesComponent {
  title = '';
  year = '';

  constructor(
    private filtersService: FiltersService,
    private responseProcessService: ResponseProcessService,
  ) {}

  search() {
    this.filtersService.title = this.title;
    this.filtersService.year = this.year;
    this.filtersService.page = 1;
    this.responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
