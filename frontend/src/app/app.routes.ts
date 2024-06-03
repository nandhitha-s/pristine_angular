import { Routes } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';
export const routes: Routes = [
    {
        path:'**',
        component: FoodsComponent
    },
    {
        path: 'foods',
        component: FoodsComponent
    }
];
