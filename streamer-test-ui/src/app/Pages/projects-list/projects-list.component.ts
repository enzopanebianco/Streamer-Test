import { Course } from './../../Models/Project';
import { Router } from '@angular/router';
import { ProjectService } from '../../Services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];
  courses:Course[]=[];
  courseId:string = "0";

  constructor(private projectService: ProjectService,private route:Router) {
  }
  
  ngOnInit() {
    this.listCourses();
  }

  listProjects(){
    this.projectService.list()
      .subscribe(data => { this.projects = data });
  }

  listCourses(){
    this.projectService.listCourses()
      .subscribe(data=>this.courses=data);
  }

  deleteProject(id: string) {
    this.projectService.delete(id).subscribe();
    this.listProjects();
  }
  listProjectsByCourseId(){
    this.projectService.listByCourseId(this.courseId)
    .subscribe(data=>this.projects=data);
  }

}
