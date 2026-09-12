import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TodosService } from '../../services/todos.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo',
  imports: [Title, MatIconModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  readonly todos = inject(TodosService);
}
