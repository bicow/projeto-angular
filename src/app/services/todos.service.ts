import { effect, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _item = signal<Array<Todo>>([]);

  readonly items = this._item.asReadonly();

  constructor() {
    this._load();

    effect(() => {
      const items = this._item();
      localStorage.setItem('todos', JSON.stringify(items));
    });
  }

  add(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    this._item.update((items) => [...items, newTodo]);
  }

  toggle(id: string) {
    this._item.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  remove(id: string) {
    this._item.update((items) => items.filter((item) => item.id !== id));
  }

  private _load() {
    const storeTodos = localStorage.getItem('todos');
    if (storeTodos) {
      this._item.set(JSON.parse(storeTodos));
    } else {
      this._item.set([
        { id: crypto.randomUUID(), title: 'Implement Mobile App', completed: false },
        { id: crypto.randomUUID(), title: 'Implement Web App', completed: true },
        { id: crypto.randomUUID(), title: 'Implement Desktop App', completed: false },
      ]);
    }
  }
}
