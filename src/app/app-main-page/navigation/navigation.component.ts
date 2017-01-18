import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdIcon, MdList} from '@angular/material';
import {AppMainPage} from '../app-main-page';

@Component({
  //selector: 'app-navigation',
  styles: [`
  `],
  /*
  providers: [
    {
      provide: AppMainPage, useExisting: forwardRef(() => AppMainPage)
    }
  ],
   */
  template: `
<div>
  Navigation
</div>
`
})
export class AppNavigation implements OnInit {

  public localState: any;
  constructor(
    public uiRouter: UIRouter,
    private parent: AppMainPage
  ) {}

  public ngOnInit() {
    /*
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });
*/
    console.log('AppNavigation');
  }
}
