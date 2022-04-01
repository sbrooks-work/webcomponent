import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang12base';
  data: Object[];

  constructor() {
    this.data = [
      { key: 'Red' },
      { key: 'Green' },
      { key: 'Blue' },
      { key: 'Orange' },
      { key: 'Purple' },
    ];
  }
}
