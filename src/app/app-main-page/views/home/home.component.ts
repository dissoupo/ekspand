import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import {AppMainPage} from '../../app-main-page';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  //selector: 'app-home',  // <app-home></app-home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ 'home.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private parent: AppMainPage
  ) {
    console.log('HomeComponent');
  }

  public ngOnInit() {
    console.log('HomeComponent.ngOnInit');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
