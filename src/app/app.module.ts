import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/service';
import { AppComponent } from './app.component';
import { MaterialModule } from './materail';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ROUTING } from './routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { HeaderTaskComponent } from './header-task/header-task.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { GetEmpListComponent } from './get-emp-list/get-emp-list.component';
import { DeleteEmpListComponent } from './delete-emp-list/delete-emp-list.component';
import { EmplistAdmimComponent } from './admin/emplist-admim/emplist-admim.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AddEmpolyeeComponent } from './admin/add-empolyee/add-empolyee.component';
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    ListTaskComponent,
    HeaderTaskComponent,
    CreateEmpComponent,
    GetEmpListComponent,
    DeleteEmpListComponent,
    EmplistAdmimComponent,
    AdminDashbordComponent,
    AddEmpolyeeComponent,
  ],
  
  imports: [
    MaterialModule,ROUTING,BrowserAnimationsModule,
    BrowserModule, HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [ 
    AddTaskComponent,
    DeleteTaskComponent,
    AddEmpolyeeComponent]
})
export class AppModule { }
