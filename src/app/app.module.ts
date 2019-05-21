import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// These Components were made by running the command "ng generate component component-name" and will appear here
import { ProductListComponent }      from './product-list/product-list.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { FormsModule }            from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { ProductComponent }      from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';


// You will need to add these routes manually
const appRoutes: Routes = [
  { path: 'tree-list', component: ProductListComponent},
  { path: 'purchase', component: PurchaseComponent },
  { path: '', redirectTo: '/tree-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    PageNotFoundComponent,
    PurchaseComponent,
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
