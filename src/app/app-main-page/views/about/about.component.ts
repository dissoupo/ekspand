import {
  Component,
  OnInit
} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {AppMainPage} from '../../app-main-page';

@Component({
  selector: 'app-about',
  styles: [`
  `],
  template: `
    <h1>About</h1>
    <div>
      TODO: about page
    </div>
  `
})
export class AboutComponent implements OnInit {
  constructor(
    public uiRouter: UIRouter,
    private parent: AppMainPage
  ) {
    console.log('AboutComponent');
  }

  public ngOnInit() {
    console.log('AboutComponent.ngOnInit');
  }
}
