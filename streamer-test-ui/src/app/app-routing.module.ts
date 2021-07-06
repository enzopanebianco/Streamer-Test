import { ProjectComponent } from './Pages/project/project.component';
import { ProjectsListComponent } from './Pages/projects-list/projects-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsCreateComponent } from './Pages/projects-create/projects-create.component';

const routes: Routes = [
  {path:'',component:ProjectsListComponent},
  {path:'list/:id',component:ProjectComponent},
  {path:'create',component:ProjectsCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
