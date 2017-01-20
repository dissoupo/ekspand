import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdTab} from '@angular/material';
import {AppMainPage} from '../app-main-page';

@Component({
  selector: 'app-quick-panel',
  styles: [`
  `],
  template: `
<h4>Panel</h4>
`
})
export class AppQuickPanel implements OnInit {

  constructor(
    public uiRouter: UIRouter,
    public parent: AppMainPage
  ) {}

  public ngOnInit() {
    console.log('AppQuickPanel.ngOnInit');
  }
}
