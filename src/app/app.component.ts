import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  sidebarOpen = false;
  showSidebar(show: boolean) {
    this.sidebarOpen = show;
  }
}
