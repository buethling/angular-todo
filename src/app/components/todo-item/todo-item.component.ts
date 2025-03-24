import { Component, input, output } from '@angular/core';
import { TodoItem } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<TodoItem>();
  todoToggled = output<TodoItem>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
