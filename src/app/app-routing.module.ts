import { NgModule } from '@angular/core';
import { LoginAComponent } from './componentes/login-a/login-a.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Web/home/home.component';
import { NosotrosComponent } from './Web/nosotros/nosotros.component';
import { ContactoComponent } from './Web/contacto/contacto.component';
import { CategoriasComponent } from './Web/categorias/categorias.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  {path:'categorias',component:CategoriasComponent},
  { path: 'componente-a', component: LoginAComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], initialNavigation: 'enabledBlocking' })],
exports: [RouterModule]

})
export class AppRoutingModule { }
