import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import {MdSidenav, MdToolbar, MdSidenavContainer} from '@angular/material';

@Component({
  selector: 'ks-main-page',
  styles: [`
  `],
  template: `
<md-sidenav-container #navContainer>

  <md-sidenav #navigation
      fxLayoutColumn 
      class="ks-sidenav"
      tabindex="-1"
      mode="over">
        <div ui-view="navigation"></div>
  </md-sidenav>
  
  <div class="ks-page-content ks-background-light ks-column">
    <div ui-view="toolbar"></div>

    <div ui-view="content"
      class="ks-view ks-column ks-scrollable">
    </div>
    
    <!--
    <div ks-edit-container ks-scroll class="ks-view ks-container ks-column ks-scrollable" ng-show="$ctrl.state.editMode"></div>
    -->
  </div>
  
  <md-sidenav #quickPanel
      fxLayoutColumn
      tabindex="-1"
      class="ks-sidenav"
      align="end"
      mode="side">
    <div ui-view="quickPanel"></div>
  </md-sidenav>  
</md-sidenav-container>
`
})
export class AppMainPage implements OnInit {

  @ViewChild('navContainer') public navContainer: MdSidenavContainer;
  @ViewChild('navigation') public navigation: MdSidenav;
  @ViewChild('quickPanel') public quickPanel: MdSidenav;

  constructor(
    public uiRouter: UIRouter
  ) {
    console.log('AppMainPage');
  }

  public ngOnInit() {
    console.log('AppMainPage.ngOnInit');
  }
}
