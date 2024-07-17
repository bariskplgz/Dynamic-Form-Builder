import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormManagementPageComponent } from './pages/form-management-page/form-management-page.component';
import { FormViewPageComponent } from './pages/form-view-page/form-view-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'formManagement',
    component: FormManagementPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'forms/:id',
     component: FormViewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
