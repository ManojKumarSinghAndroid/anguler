import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';

@NgModule({
  declarations: [
    UserComponent,
    UserloginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserloginComponent
  ]
})
export class ModuleModule { }
