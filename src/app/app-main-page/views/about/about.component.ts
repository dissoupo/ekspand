import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {AppMainPage} from '../../app-main-page';

@Component({
  //selector: 'app-about',
  styles: [`
  `],
  template: `
    <h1>About</h1>
    <div>
      For hot module reloading run
      <pre>npm run start:hmr</pre>
    </div>
    <div>
      <h3>
        patrick@AngularClass.com
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
  `
})
export class AboutComponent implements OnInit {

  public localState: any;
  constructor(
    public uiRouter: UIRouter,
    private parent: AppMainPage
  ) {
    console.log('AboutComponent');
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
    console.log('AboutComponent.ngOnInit');
  }
}
