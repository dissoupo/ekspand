import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdButton} from '@angular/material';
import {AppMainPage} from '../app-main-page';

@Component({
  selector: 'app-navigation',
  styles: [`
    header {
      border-bottom: 1px solid #cccccc;
      flex-shrink: 0;
      z-index: 2;
      font-size: 20px;
      font-weight: 400;
      font-family: Roboto, "Helvetica Neue", sans-serif;
      padding: 8px;
      text-transform: uppercase;
    }

    md-icon {
      margin: 0 8px;
    }
    
    a {
      text-decoration: none;
    }
`],
  template: `
    <div class="ks-container-vertical">
      <header><md-icon svgIcon="brand"></md-icon> Ekspand</header>
      <div class="ks-scrollable">
      <perfect-scrollbar class="ks-scrollbar-element">
        <md-list>
          <a *ngFor="let menu of appMenu"
            md-list-item
            (click)="parent.navContainer?.start?.close()"
            uiSref="{{menu.route}}"> 
            <md-icon svgIcon="{{menu.icon}}"></md-icon> {{menu.title}}
          </a>
        </md-list>
      </perfect-scrollbar>
    </div>
    </div>
`
})
export class AppNavigation implements OnInit {

  appMenu = [
    {
      title: 'Home',
      route: 'app.home',
      icon: 'content:ic_send_24px'
    },
    {
      title: 'About',
      route: 'app.about',
      icon: 'communication:ic_contacts_24px'
    },
    {
      title: 'Account',
      route: 'app.account',
      icon: 'action:ic_settings_24px'
    }
  ];

  constructor(
    public uiRouter: UIRouter,
    public parent: AppMainPage
  ) {}

  public ngOnInit() {
    console.log('AppNavigation.ngOnInit');
  }
}
