import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Hola {{name}}!</h1>

    <ol>
      <li>Potra Salvaje - Isabel Aaiun</li>
      <li>vampire - Olivia Rodrigo</li>
      <li>drivers license - Olivia Rodrigo</li>
    </ol>
  `,
  styles: `ol { list-style-type: upper-roman; }`,
})
export class AppComponent {
  name = "Matias"
}
