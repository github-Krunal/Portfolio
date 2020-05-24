import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'account',pathMatch:'full'},
  {path:'account',loadChildren:()=>import('./component/account/account.module').then(account=>account.AccountModule)}
  // {path: 'todo',loadChildren: () => import('./components/todo/todo.module').then(m => m.TodoModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
