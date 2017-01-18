import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {MdTab} from '@angular/material';

@Component({
  //selector: 'app-quick-panel',
  styles: [`
  `],
  template: `
<div>
  Quick Panel
</div>
`
})
export class AppQuickPanel implements OnInit {

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
    console.log('AppQuickPanel');
  }
}
