import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './components/log/log.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth.guard';
import { MenuComponent } from './components/menu/menu.component';
import {AhorcadoComponent} from './components/ahorcado/ahorcado.component';
import { HigerOrLowerComponent } from './components/higer-or-lower/higer-or-lower.component';

const routes: Routes = [
  { path: 'log', component: LogComponent },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' }, // Redirige a '/dashboard/menu' por defecto
      { path: 'menu', component: MenuComponent }, 
      { path: 'ahorcado', component: AhorcadoComponent },
      {path:'higerOrLower', component:HigerOrLowerComponent}
      // Otras rutas de los componentes hijos del Dashboard
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
