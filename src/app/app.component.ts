import {
  Component,
  OnInit
} from '@angular/core';
import { UIRouter } from 'ui-router-ng2';

@Component({
  selector: 'xpnd-app',
  styles: [`
  `],
  template: `
    <div ui-view="main" class="xpnd-view xpnd-column">
      <!-- show loading until the state is resolved -->
      <md-progress-bar mode="indeterminate" aria-label="loading"></md-progress-bar>
      <div fxLayout="column" fxLayoutAlign="center center">                
        <div><md-icon svgIcon="brand" class="s64 xpnd-text-brand"></md-icon></div>
        <div>loading...</div>
      </div>      
    </div>
`
})
export class AppComponent implements OnInit {

  constructor(
    public uiRouter: UIRouter
  ) {
    console.log('AppComponent');
  }

  public ngOnInit() {
    console.log('AppComponent.ngOnInit');
  }
}
