import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: UserComponent },
  { path: 'add:/id', component: FormComponent },
  // { path: 'edit', component: FormComponent },
]


@NgModule({
  declarations: [
    UserComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    MaterialModule
  ]
})
export class UserModule { }
