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

/**
 * Enabling Production Mode
 * Boost the performance of an app by turning on production mode
 * -------------------------------------------------------------
 *
 * Change Detection
 *    - Synchronizing data in an app with HTML
 *    => the process to update HTML document whenever data changes in an app.
 *    For example, if you press a button upload a file, send the request, or typing a form.
 *    Change Detection will run. Angular will check the data in an app. If the data changes, it will
 *    reflect those changes in the HTML, instead of refreshing the page like regular site
 *
 *    When change detection runs:
 *      - When the app is initialized
 *      - During changes in our data
 *      - Manually triggering change detection
 *
 *    => Angular change detection runs twice when an app is initialized.
 *    => When our app is initialized, it will run change detection twice,
 *    it doesn't matter if data changes in our app. After change detection twice,
 *    it will compare the result to both output, if the app output different result,
 *    that mean we done something wrong. If our data doesn't change, that mean this template
 *    doesn't change ether. Consistence is the key of any application, user should be able to
 *    refresh their browser without seen any complete app. This condition check could be help
 *    for debugging, it rare to make a issue, by it can happen.
 *    => Don't want it in production app. If leave it enable, it could impact performance of
 *    our app, we should turn off it when ship our app to production.
 *    => By default, angular will turn it on, to turn off:
 *      1. Go to angular.json
 *      2. projects.basics.architect.build.configurations
 *      3. Have setting for product and development mode
 *      4. inside development mode: "optimization": false => if setting to "true", angular will
 *      not run change detection twice on initialization. Remember, this feature is helpful for
 *      debugging an app, we could leave on during development. By default, this value is true.
 *
 */

/**
 *
 * Understanding Modules
 *    ES2015 Modules
 *        a.js
 *            import b from './b';
 *            console.log(b.foo)
 *        b.js
 *            export default {
 *              foo: 'Hello world!'
 *            }
 *
 *    Problem with Modules
 *        - Duplicate Modules
 *        - Circular Dependency
 *        - Harder to manage overall
 *
 *    Angular modules
 *      - Not a replacement of ES2015 Modules
 *      - Groups modules by feature
 *
 *    How Angular Modules Work
 *            Product
 *          Single Product
 *          Product List
 *            getImage()
 *
 *    src/app/app.module.ts: root module
 */
