import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Studentlist } from '../studentlist/studentlist';

export const routes: Routes = [
    {
        path: 'home',component: Home
    },
    {
        path: 'studentlist' ,component: Studentlist
    },
];
