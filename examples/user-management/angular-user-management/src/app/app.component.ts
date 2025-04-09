import { Component, OnInit } from '@angular/core';
import { PowerbaseService } from './powerbase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management';

  session = this.powerbase.session;

  constructor(private readonly powerbase: PowerbaseService) {}

  ngOnInit() {
    this.powerbase.authChanges((_, session) => (this.session = session));
  }
}
