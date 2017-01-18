import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  Injectable,
  ApplicationRef,
  Component,
  OnInit
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  MaterialModule
} from '@angular/material';
import {
  trace,
  Category,
  UIRouterModule,
  UIView,
  UIRouter
} from 'ui-router-ng2';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppState, InternalStateType } from './app.service';

import { AppMainPage } from './app-main-page';
import { HomeComponent } from './app-main-page/views/home';
import { AboutComponent } from './app-main-page/views/about';
//import { XLargeDirective } from './app-main-page/views/home/x-large';
import { AppNavigation } from './app-main-page/navigation';
import { AppToolbar } from './app-main-page/toolbar';
import { AppQuickPanel } from './app-main-page/quick-panel';

import '../styles/styles.scss';
import '../styles/headings.scss';

// Application wide providers
const APP_PROVIDERS = [
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, /*Category.HOOK, Category.UIVIEW,*/ Category.VIEWCONFIG);

/**
 * Create your own configuration class (if necessary) for any root/feature/lazy module.
 *
 * Pass it to the UIRouterModule.forRoot/forChild factory methods as `configClass`.
 *
 * The class will be added to the Injector and instantiate when the module loads.
 */
/*
@Injectable()
export class MyRootUIRouterConfig {
  constructor(uiRouter: UIRouter) {
    if ('production' === ENV) {
      // Production

    } else {
      // Show the ui-router visualizer
      var vis = require('ui-router-visualizer');
      vis.visualizer(uiRouter);
    }
  }
}
*/

@Component({
  selector: 'app',
  styles: [`
  `],
  template: `
    <div ui-view="main" class="tw-view tw-column">
      <!-- show loading until the state is resolved-->
      <div layout="column" layout-align="center center">
        <!--md-progress-linear md-mode="query"></md-progress-linear-->
        <!--div><md-icon md-svg-icon="tellwise" class="s128 tw-text-tellwise"></md-icon></div-->
        <div>loading ui-view...</div>
      </div>
    </div>
`
})
class AppComponent implements OnInit {

  constructor(
    public uiRouter: UIRouter
  ) {
    console.log('AppComponent');
  }

  public ngOnInit() {
    console.log('AppComponent.ngOnInit');
  }
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AppMainPage,
    AppToolbar,
    AppNavigation,
    AppQuickPanel,
    AboutComponent,
    HomeComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    UIRouterModule.forRoot({
      states: [
        {
          name: 'app',
          abstract: true,
          views : {
           'main@': { component: AppMainPage },
           'toolbar@app': { component: AppToolbar },
           'navigation@app': { component: AppNavigation },
           'quickPanel@app': { component: AppQuickPanel }
           }
        },
        {
          name: 'app.about',
          url: '^/about',
          views: {
            'content@app': { component: AboutComponent }
          },
        },
        {
          name: 'app.home',
          url: '^/home',
          views: {
            'content@app': { component: HomeComponent }
          },
        }
      ],
      useHash: true,
      otherwise: { state: 'app.home', params: {} },
//      configClass: MyRootUIRouterConfig
    })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState,
    public uiRouter: UIRouter
  ) {
    console.log('AppModule');
  }

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

