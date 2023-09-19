import { Component, OnDestroy, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AppConstants } from '../../shared/constans/constans';
import { UnsavedChangesGuard } from '../../shared/guards/unsaved-changes.guard';
import { GeneralModel } from '../../shared/types/general.model';
import { TodoService } from './services/todo.service';
import { Todo } from './shared/interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  m: GeneralModel = new GeneralModel();

  constructor(
    public readonly apiService: ApiService,
    public readonly todoService: TodoService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly unsavedChangesGuard: UnsavedChangesGuard,
  ) {}

  ngOnInit(): void {
    const localStorageUser: string | null = localStorage.getItem(
      AppConstants.localStorageUserKey,
    );
    console.log(localStorageUser);
    if (localStorageUser !== null)
      this.m.currentUser = JSON.parse(localStorageUser);

    this.apiService.init(this.m);
    this.todoService.init(this.m);
    this.unsavedChangesGuard.init(this.m);
  }

  ngOnDestroy(): void {
    this.m.subscriptions.forEach(
      (subscription: Subscription) => subscription?.unsubscribe(),
    );
  }

  openNew(): void {
    this.m.todo = {};
    this.m.submitted = false;
    this.m.todoDialog = true;
  }

  deleteSelectedTodos(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected todos?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: (): void => {
        this.m.selectedTodos?.forEach((todo) =>
          this.todoService.deleteTodo(todo),
        );
        this.m.selectedTodos = null;
      },
    });
  }

  deleteTodo(todo: Todo): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + todo.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.todoService.deleteTodo(todo);
        this.m.todo = {};
      },
    });
  }

  hideDialog(): void {
    this.m.todoDialog = false;
    this.m.submitted = false;
  }

  saveTodo(): void {
    this.m.submitted = true;

    if (this.m.todo.title?.trim()) {
      this.todoService.createTodo(this.m.todo);

      this.m.todos = [...this.m.todos];
      this.m.todoDialog = false;
      this.m.todo = {};
    }
  }

  getSeverity(status: undefined | boolean) {
    return status ? 'success' : '';
  }

  onRowEditInit(todo: Todo): void {
    this.m.editedTodos[todo.id as number] = { ...todo };
  }

  onRowEditSave(todo: Todo): void {
    this.todoService.editTodo(todo);
  }

  onRowEditCancel(todo: Todo, index: number): void {
    this.m.todos[index] = this.m.editedTodos[todo.id as number];
    delete this.m.editedTodos[todo.id as number];
  }
}
