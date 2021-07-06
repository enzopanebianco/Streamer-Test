import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/Project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  //funcao herdada do pai que retorna o valor do menuEdit
  //E o projeto listado
  @Input() public changeMenu:()=>boolean;
  @Input() project:Project={
    id:'',
    name:'',
    courseId:'',
    projectStatus:0,
    course:{
      name:'',
      id:'',
    }
  };
  constructor( ) {
  }
}
