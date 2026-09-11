import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
// import { Counter } from './screens/counter/counter';
// import { Todo } from './screens/todo/todo';
// não preciso importar pois estou fazendo 'lazy load' importando direto quando a rota é acessada

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'counter',
        // component: Counter,
        loadComponent() {
            return import('./screens/counter/counter').then((m) => m.Counter);
        }
    },
    {
        path: 'todo',
        // component: Todo,
        loadComponent() {
            return import('./screens/todo/todo').then((m) => m.Todo);
        }
    },
];
