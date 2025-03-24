import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: TodoItem[], searchTerm: string): TodoItem[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter(todo => {
      return todo.title.toLowerCase().includes(text);
    });
  }

}
