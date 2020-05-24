import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpService } from './sign-up/sign-up.service';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

const accountRouting: Routes = [
  { path: '', component: AccountComponent },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRouting),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  declarations: [SignUpComponent, AccountComponent, LoginComponent],
  providers: [SignUpService],
})
export class AccountModule {}
