import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FuncreationComponent } from './funcreation/funcreation.component';

@NgModule({
  declarations: [
    UserComponent,
    UserloginComponent,
    FuncreationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserloginComponent,
    FuncreationComponent
  ]
})
export class ModuleModule { }
