import { Course } from './../../Models/Project';
import { ProjectService } from './../../Services/project.service';
import { ProjectBase } from 'src/app/Models/Project';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.css']
})
export class ProjectsCreateComponent implements OnInit {
  msgError: boolean = false;
  project: ProjectBase = {
    name: '',
    courseId: '',
    projectStatus: 0,
  };
  listCourses: Course[] = [];
  status = [
    {
      id: 0,
      name: 'Em desenvolvimento'
    },
    {
      id: 1,
      name: 'Publicado'
    },
  ]
  constructor(private projectService: ProjectService, private route: Router) { }

  ngOnInit() {
    this.projectService.listCourses()
      .subscribe(data => { this.listCourses = data });

  }
  createProject(form: NgForm) {

    this.project.projectStatus = parseInt(form.value.projectStatus);
    if(!form.valid){
      this.msgError=true;
      return;
    }
    this.msgError = false;
    this.projectService.create(this.project).subscribe(
      data=>{
        if(data){
          this.route.navigate(['/']);
        }
      }
    )
  }

}
