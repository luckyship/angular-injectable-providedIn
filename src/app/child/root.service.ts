import { Injectable } from '@angular/core';
import { RootChildModule } from './root-child.module';

@Injectable({
  providedIn: null,
})
export class RootService {
  count = 0;
  constructor() {
    console.log('--lucky---');
  }
}
