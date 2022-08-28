import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component:LogInFormComponent },
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
