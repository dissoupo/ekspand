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
  <div ui-view="navigation"></div>
  
  <div class="xpnd-page-content xpnd-background-light xpnd-column">
    <div ui-view="toolbar"
        id="vertical-navigation-toolbar"
        ng-hide="$ctrl.state.editMode">
    </div>
  
      
    <div ui-view="content"
        id="vertical-navigation-content"
        class="xpnd-view xpnd-column xpnd-scrollable"
        xpnd-scroll
        ng-hide="$ctrl.state.editMode">
    </div>
  
    <div xpnd-edit-container xpnd-scroll class="xpnd-view xpnd-container xpnd-column xpnd-scrollable" ng-show="$ctrl.state.editMode"></div>
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
