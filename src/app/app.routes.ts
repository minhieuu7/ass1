import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryComponent } from './components/category/category.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { LoginComponent } from './auth/login/login.component';

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
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'category',
                component: CategoryComponent
            },
            {
                path: 'product',
                component: AdminProductComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'products-list/:id',
        component: ProductDetailComponent
    }
];
