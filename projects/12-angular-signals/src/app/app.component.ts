import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    <p>{{ todo() }}</p>
    <p>{{ todoat() }}</p>
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  updateTodo(todo: Todo) {}

  todo = signal('todo');
  date = signal('date');

  todoat = computed(() => `${this.todo()} at ${this.date()}`);

  loggingEffect = effect(() => console.log(`Updated: ${this.todo()}`));
}
