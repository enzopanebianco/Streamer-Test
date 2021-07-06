import { ProjectService } from './../../Services/project.service';
import { Course } from './../../Models/Project';
import { Component, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/Models/Project';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnChanges{
  id:string='';
  //funcao herdada do pai que retorna o valor do menuEdit
  //E o projeto listado
  @Input() public changeMenu:()=>boolean;
  @Input() project:Project={
    id:this.id,
    name:'',
    courseId:'',
    projectStatus:0,
    course:{
      name:'',
      id:'',
    }
  };
  
  listCourses:Course[] = []

  //lista para editar o status do projeto 
  status=[
    {
      id:0,
      name:'Em desenvolvimento'
    },
    {
      id:1,
      name:'Publicado'
    },
  ]
  constructor(private projectService:ProjectService,private route:ActivatedRoute) { }
  //hook para vigiar as alterações do componente
  ngOnChanges(){
    this.projectService.listCourses()
    .subscribe(data=>this.listCourses=data);
    this.id=String(this.route.snapshot.paramMap.get('id'));
  }
  update(form:NgForm){
    //transforma o projectStatus do select em um valor numérico
    this.project.projectStatus = parseInt(form.value.projectStatus);
    this.projectService.update(this.project)
    .subscribe(data=>{
      if(data){
        this.changeMenu();
      }
      else{
        return;
      }
    });
  }
}
