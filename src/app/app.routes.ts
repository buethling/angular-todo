import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const m = await import('./home/home.component');
            return m.HomeComponent;
        }
    },
    {
        path: 'todos',
        loadComponent: async () => {
            const m = await import('./todos/todos.component');
            return m.TodosComponent;
        }
    }
];
