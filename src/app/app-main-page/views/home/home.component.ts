import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../../app.service';
import { XLargeDirective } from './x-large';
import {AppMainPage} from '../../app-main-page';

@Component({
  //selector: 'app-home',  // <app-home></app-home>
  styleUrls: [ 'home.component.scss' ],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    public appState: AppState,
    private parent: AppMainPage
  ) {
    console.log('HomeComponent');
  }

  public ngOnInit() {
    console.log('HomeComponent.ngOnInit');
  }
}
