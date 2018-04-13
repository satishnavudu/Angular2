import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpace } from './convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductsService } from './products/products.service';
import {RouterModule} from  '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductGaurdServiceService } from './products/product-gaurd-service.service';
import { NoPageComponent } from './no-page/no-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
   {path:'products', component:ProductListComponent},
   {path:'products/:id',
   canActivate: [ ProductGaurdServiceService ],
   component:ProductDetailsComponent},
   {path:'home',component:WelcomeComponent},
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'pagenotfound',component:NoPageComponent},
   {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [ProductsService,ProductGaurdServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
