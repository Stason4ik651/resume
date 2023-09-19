import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { MovieComponent } from './pages/movies/movie.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { GameBoardComponent } from './pages/snake-game/game-board/game-board.component';
import { TodoComponent } from './pages/todo-list/todo.component';
import { WatchesComponent } from './pages/watches/watches.component';

const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'watches', component: WatchesComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'snake', component: GameBoardComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
