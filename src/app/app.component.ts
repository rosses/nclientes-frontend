import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nclientes-frontend';

  constructor(public location: Location, public api: ApiService) {

  }
}
