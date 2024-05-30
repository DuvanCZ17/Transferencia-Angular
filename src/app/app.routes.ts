import { Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
   {path: 'contact', component: ContactanosComponent},
   {path: 'home', component: ProductosComponent},
   {path: 'inicio', component: InicioComponent},
   {path: '', component: ProductosComponent}

];
