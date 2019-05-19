import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// These Components were made by running the command "ng generate component component-name" and will appear here
import { CartViewComponent }      from './cart-view/cart-view.component';
import { TreeListComponent }      from './tree-list/tree-list.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { FormsModule }            from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { TreeItemComponent }      from './tree-item/tree-item.component';

// You will need to add these routes manually
const appRoutes: Routes = [
  { path: 'cart-view', component: CartViewComponent},
  { path: 'tree-list', component: TreeListComponent},
  { path: '', redirectTo: '/tree-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CartViewComponent,
    TreeListComponent,
    PageNotFoundComponent,
    TreeItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
