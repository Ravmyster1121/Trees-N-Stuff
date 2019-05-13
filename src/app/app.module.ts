import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular router import for allowing more than "one page/view"
import { RouterModule, Routes } from '@angular/router';

/*
const appRoutes: Routes = [
  { path: 'crisis-center',    component: CrisisListComponent },
  { path: 'hero/:id',         component: HeroDetailComponent},
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List'}
  }
];
*/

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
