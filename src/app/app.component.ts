import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`
      .app {
        width: 1000px;
        margin: auto;
      }
      .main {
        background-color:white;      
      }
    `],
    template: `
      <div class="app">
        <az-nav-bar></az-nav-bar>
        <div class="main">
          <router-outlet></router-outlet>
        </div>
      </div>
    `,
})
export class AppComponent  {  }