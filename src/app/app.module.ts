import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RootChildModule } from './child/root-child.module';
import { RootService } from './child/root.service';

// 第一个模块
@Component({
  selector: 'root-first',
  template: ` <div>root-first</div> `,
  styles: [''],
})
export class RootFirstComponent {
  constructor() {}
}
@NgModule({
  imports: [
    RouterModule,
    RootChildModule,
    RouterModule.forChild([
      {
        path: '',
        component: RootFirstComponent,
      },
    ]),
  ],
  providers: [RootService],
  declarations: [RootFirstComponent],
})
export class RootFirstModule {}

// app component, app module
@Component({
  selector: 'app-root',
  template: `
    app header
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'root-first',
        loadChildren: () =>
          import('./app.module').then((val) => val.RootFirstModule),
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// 第二个根模块
@Component({
  selector: 'app-root2',
  template: `
    <!-- app-root2 header: {{ service.count }}
    <button (click)="service.count = service.count + 1">+</button> -->
  `,
  styles: [``],
})
export class AppComponent2 {
  constructor() {} // public service: RootService
}
@NgModule({
  declarations: [AppComponent2],
  imports: [BrowserModule, RouterModule],
  bootstrap: [AppComponent2],
})
export class AppModule2 {}
