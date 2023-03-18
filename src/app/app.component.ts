import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-select-safari';
  selectedOption: number | null = null;

  options = [
    { id: 1, name: 'The page jumped to the top' },
    { id: 2, name: 'The page did not jump to the top' },
  ]
}
