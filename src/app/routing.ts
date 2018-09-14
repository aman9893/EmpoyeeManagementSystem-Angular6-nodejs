import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'  },
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: RegisterComponent },
    { path: 'dashbord', component: DashbordComponent , pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'admin', component: AdminDashbordComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);