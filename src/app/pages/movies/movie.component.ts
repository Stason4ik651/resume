import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';
import { ResponseProcessService } from './services/response-process.service';
import { Film } from './shared/interfaces/film';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() film!: Film;

  constructor(
    public readonly dataService: DataService,
    private responseProcessService: ResponseProcessService,
  ) {
    responseProcessService
      .saveAndProcessGenres()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
    responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
