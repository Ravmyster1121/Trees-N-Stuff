import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// These Components were made by running the command "ng generate component component-name" and will appear here
import { CartViewComponent }      from './cart-view/cart-view.component';
import { TreeListComponent }      from './tree-list/tree-list.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { FormsModule }            from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { PurchaseComponent } from './purchase/app.component';
import { TreeItemComponent }      from './tree-item/tree-item.component';
import { SearchComponent } from './search/search.component';

// You will need to add these routes manually
const appRoutes: Routes = [
  { path: 'cart-view', component: CartViewComponent},
  { path: 'tree-list', component: TreeListComponent},
  { path: 'purchase', component: PurchaseComponent},
  { path: '', redirectTo: '/tree-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CartViewComponent,
    TreeListComponent,
    PurchaseComponent,
    TreeItemComponent,
    PageNotFoundComponent,
    TreeItemComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
