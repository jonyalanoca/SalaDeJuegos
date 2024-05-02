import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './components/log/log.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'log', component: LogComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'dashboard', component: DashboardComponent},

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
