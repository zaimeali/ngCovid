import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: 'home', component: SidebarComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
