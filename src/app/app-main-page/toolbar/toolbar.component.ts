import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdToolbar, MdButton} from '@angular/material';
import {AppMainPage} from '../app-main-page';

@Component({
  selector: 'app-toolbar',
  styles: [`
  `],
  template: `
<md-toolbar class="ks-glow-z1 ks-page-toolbar ks-brand">
  <button md-icon-button aria-label="Navigation" (click)="parent.navContainer?.start?.open()">
    <md-icon svgIcon="navigation:ic_menu_24px"></md-icon>
  </button> 
  <span fxFlex></span>
  <button md-icon-button aria-label="Quick Panel" (click)="parent.navContainer?.end?.toggle()">
    <md-icon svgIcon="action:ic_list_24px"></md-icon>
  </button>  
</md-toolbar>
`
})
export class AppToolbar implements OnInit {

  constructor(
    public uiRouter: UIRouter,
    public parent: AppMainPage
  ) {}

  public ngOnInit() {
    console.log('AppToolbar.ngOnInit');
  }
}
