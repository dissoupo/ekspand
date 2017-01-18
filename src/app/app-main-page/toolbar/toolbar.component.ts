import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdToolbar, MdButton} from '@angular/material';

@Component({
  //selector: 'app-toolbar',
  styles: [`
  `],
  template: `
<div>Toolbar</div>
`
})
export class AppToolbar implements OnInit {

  public localState: any;
  constructor(
    public uiRouter: UIRouter
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
    console.log('AppToolbar');
  }
}
