import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ButtonActionComponent } from './pages/calculator/components/button-action/button-action.component';
import { ButtonNumericComponent } from './pages/calculator/components/button-numeric/button-numeric.component';
import { ButtonOperationComponent } from './pages/calculator/components/button-operation/button-operation.component';
import { DisplayComponent } from './pages/calculator/components/display/display.component';
import { GeneralButtonComponent } from './pages/calculator/components/general-button/general-button.component';
import { EnumPipe } from './pages/calculator/shared/pipes/enum-pipe.pipe';
import { FilmComponent } from './pages/movies/components/film/film.component';
import { HeaderMoviesComponent } from './pages/movies/components/header-movies/header-movies.component';
import { PaginatorComponent } from './pages/movies/components/paginator/paginator.component';
import { PopupComponent } from './pages/movies/components/popup/popup.component';
import { MovieComponent } from './pages/movies/movie.component';
import { AboutComponent } from './pages/resume/components/about/about.component';
import { ContactComponent } from './pages/resume/components/contact/contact.component';
import { HeaderComponent } from './pages/resume/components/header/header.component';
import { HomeComponent } from './pages/resume/components/home/home.component';
import { ProjectsComponent } from './pages/resume/components/projects/projects.component';
import { SkillsComponent } from './pages/resume/components/skills/skills.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { GameBoardComponent } from './pages/snake-game/game-board/game-board.component';
import { AnalogWatchComponent } from './pages/watches/components/analog-watch/analog-watch.component';
import { NumericComponent } from './pages/watches/components/digital-watch/components/numeric/numeric.component';
import { SeparatorComponent } from './pages/watches/components/digital-watch/components/separator/separator.component';
import { DigitalWatchComponent } from './pages/watches/components/digital-watch/digital-watch.component';
import { WatchesComponent } from './pages/watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    WatchesComponent,
    DigitalWatchComponent,
    AnalogWatchComponent,
    NumericComponent,
    SeparatorComponent,
    CalculatorComponent,
    DisplayComponent,
    GeneralButtonComponent,
    ButtonActionComponent,
    ButtonNumericComponent,
    ButtonOperationComponent,
    EnumPipe,
    GameBoardComponent,
    MovieComponent,
    HeaderMoviesComponent,
    FilmComponent,
    PaginatorComponent,
    PopupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    NgOptimizedImage,
    RouterLink,
    RouterModule,
    DialogModule,
    PaginatorModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
