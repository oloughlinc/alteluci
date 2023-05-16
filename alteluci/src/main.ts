import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { KeyValuePipe } from '@angular/common';

const loadingElement = document.querySelector(".loading-splash");
const loadingBar = document.querySelector(".loading-bar")

function wait(time: number) {
  return new Promise(timer => {
    setTimeout(timer, time)
  })
}

setTimeout(() => {

})

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(async () => {
    await wait(750); // no matter how long it takes to load, we will always wait another second, this is a minimum time to see the screen
    loadingElement?.classList.add("loading-complete");
    loadingBar?.classList.add("loading-complete");
    setTimeout(() => loadingElement?.remove(), 2000)
  })
  .catch(err => console.error(err));
