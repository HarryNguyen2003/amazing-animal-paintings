import { Routes } from '@angular/router';
import { ProductList } from './page/product/product-list/product-list';
import { CartComponent } from './page/cart/cart';
import { QuestionComponent } from './page/question/question';

export const routes: Routes = [

    // pathMatch để angular biết khi nào redirect To 
    // khi là path rỗng nó tự redirectTo products
    {path: '',  redirectTo: '/products', pathMatch: 'full'},
    {path: 'products', component:ProductList},
    {path:'cart',component:CartComponent},
    {path:'question',component:QuestionComponent}
];
