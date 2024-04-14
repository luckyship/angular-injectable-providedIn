import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, AppModule2 } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule2)
  .catch((err) => console.error(err));
