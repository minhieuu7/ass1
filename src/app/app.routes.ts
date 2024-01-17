import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'product-list',
                component: ProductsComponent,
            },
     
        ],
        component: MainLayoutComponent,
    },
    {
        path: 'products-list/:id',
        component: ProductDetailComponent
    }
];
