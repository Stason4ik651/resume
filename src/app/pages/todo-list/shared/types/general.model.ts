import { Subscription } from 'rxjs';
import { Todo } from '../../pages/todos/shared/interfaces/todo';
import { AppConstants } from '../constans/constans';
import { User } from '../interfaces/user';

export class GeneralModel {
  todos: Todo[] = [];
  todo!: Todo;
  currentUser!: User;
  subscriptions: Subscription[] = [];
  searchInput!: string;
  todoDialog: boolean = false;

  selectedTodos!: Todo[] | null;

  submitted: boolean = false;

  statuses = [
    { label: AppConstants.activeLabel, value: false },
    { label: AppConstants.completedLabel, value: true },
  ];
  editedTodos: { [s: string]: Todo } = {};
}
