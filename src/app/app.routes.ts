import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { Menu } from './pages/menu/menu';
import { Breadcumbs } from './pages/breadcumbs/breadcumbs';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Error404 } from './pages/error-404/error-404';
import { Busqueda } from './pages/busqueda/busqueda';


export const routes: Routes = [
    {
        path: '',
        component: Inicio,
        pathMatch: 'full'
    },
    {
        path: 'elementos',
        component: ElementosSitio
    },
    {
        path: 'menu',
        component: Menu
    },
    {
        path: 'breadcumbs',
        component: Breadcumbs
    },
    {
        path: 'mapa-sitio',
        component: MapaSitio
    },
    {
        path: 'busqueda',
        component: Busqueda,
    },
    {
        path: '**',
        component: Error404
    }
];
