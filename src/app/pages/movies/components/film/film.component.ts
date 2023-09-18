import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Film } from '../../shared/interfaces/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Film;
  genres!: string;

  constructor(public readonly dataService: DataService) {}

  ngOnInit(): void {
    this.genres = this.dataService.convertIdsToGenres(this.film.genreIds);
  }

  openPopup() {
    this.dataService.selectedMovie = this.film;
    this.dataService.popup = true;
  }
}
