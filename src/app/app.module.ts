import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { AppComponent }   from './app.component';

// These Components were made by running the command "ng generate component component-name" and will appear here
import { FormsModule }            from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { ProductListComponent }   from './product-list/product-list.component';
import { ProductComponent }       from './product/product.component';
import { PurchaseComponent }      from './purchase/purchase.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartViewComponent } from './cart-view/cart-view.component';

// You will need to add these routes manually
const appRoutes: Routes = [
  { path: 'product-list', component: ProductListComponent},
  { path: 'purchase', component: PurchaseComponent },
  { path: 'product-page/:id', component: ProductPageComponent }, //Passing in all of the params of the product that was selected through the URL
  { path: '', redirectTo: '/product-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    PurchaseComponent,
    PageNotFoundComponent,
    ProductPageComponent,
    CartViewComponent,
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
