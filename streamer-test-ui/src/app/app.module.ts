import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './Services/project.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapModule } from './BootstrapConfig/bootstrap.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsListComponent } from './Pages/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './Components/project-details/project-details.component';
import { ProjectComponent } from './Pages/project/project.component';
import { ProjectEditComponent } from './Components/project-edit/project-edit.component';
import { FormsModule } from '@angular/forms';
import { ProjectsCreateComponent } from './Pages/projects-create/projects-create.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    ProjectComponent,
    ProjectEditComponent,
    ProjectsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
