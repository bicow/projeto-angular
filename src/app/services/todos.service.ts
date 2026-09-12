import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _item = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Implement Mobile App', completed: false },
    { id: crypto.randomUUID(), title: 'Implement Web App', completed: true },
    { id: crypto.randomUUID(), title: 'Implement Desktop App', completed: false },
  ]);

  readonly items = this._item.asReadonly();

  toggle(id: string) {
    this._item.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
}
