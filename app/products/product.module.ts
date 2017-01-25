import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

import { AppRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    providers:[
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule {

}