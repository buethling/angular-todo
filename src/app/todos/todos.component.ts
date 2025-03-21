import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItem } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<TodoItem>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
