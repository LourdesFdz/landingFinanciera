import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },  // '' mostrara la pagina principal
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {path: '**', redirectTo: '' }       // '**' captura cualquier ruta desconocida y redirige al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
