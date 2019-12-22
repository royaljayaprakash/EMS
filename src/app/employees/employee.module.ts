import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { EmployeeDetailGuard } from './employee-detail.guard';
 import { SharedModule } from '../shared/shared.module';
import { EmployeeDetailComponent } from './employee-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'employees', component: EmployeeListComponent },
      {
        path: 'employees/:id', component: EmployeeDetailComponent,
        canActivate: [EmployeeDetailGuard],
       
      }
    ]),
    SharedModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class EmployeeModule { }
