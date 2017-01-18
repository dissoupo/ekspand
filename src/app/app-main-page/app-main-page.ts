import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdSidenav, MdToolbar, MdButton} from '@angular/material';

@Component({
  //selector: 'app-main-page',
  styles: [`
  `],
  template: `
  <h1>Main</h1>
  <div ui-view="navigation"></div>
  
  <div class="tw-page-content tw-background-light tw-column">
    <div ui-view="toolbar"
        id="vertical-navigation-toolbar"
        ng-hide="$ctrl.state.editMode">
    </div>
  
      
    <div ui-view="content"
        id="vertical-navigation-content"
        class="tw-view tw-column tw-scrollable"
        tw-scroll
        ng-hide="$ctrl.state.editMode">
    </div>
  
    <div tw-edit-container tw-scroll class="tw-view tw-container tw-column tw-scrollable" ng-show="$ctrl.state.editMode"></div>
  </div>
  
  <div ui-view="quickPanel"></div>
`
})
export class AppMainPage implements OnInit {

  public localState: any;

  constructor(
    public uiRouter: UIRouter
  ) {
    console.log('AppMainPage');
  }

  public ngOnInit() {
    /*
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
*/
    console.log('AppMainPage.ngOnInit');
  }
}
