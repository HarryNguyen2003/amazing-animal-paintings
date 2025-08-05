import { Routes } from '@angular/router';
import { ProductList } from './product/product-list/product-list';

export const routes: Routes = [

    // pathMatch để angular biết khi nào redirect To 
    // khi là path rỗng nó tự redirectTo products
    {path: '',  redirectTo: '/products', pathMatch: 'full'},
    {path: 'products', component:ProductList}
];
