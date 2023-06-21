import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**
 * First file that application to run
 *
 * 2 Responsibilities:
 *    - First: need to load angular framework
 *    - Second: load app code
 *    => Load angular before load app
 *
 * main.ts
 *    - code inside this loading already loading angular and app code
 *
*/
