import { ProjectService } from './../../Services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/Project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project:Project={
    id:'',
    name:'',
    courseId:'',
    projectStatus:0,
    course:{
      name:'',
      id:'',
    }
  };
  //Variavel menuEdit que muda o componente de edição e de listagem unica do projeto
  menuEdit:boolean=false;
  id:string='';
  
  constructor(private projectService:ProjectService,private route:ActivatedRoute) { }

  ngOnInit() {
  this.id=String(this.route.snapshot.paramMap.get('id'));  
 
  this.projectService.listById(this.id)
    .subscribe(data=>{this.project=data});  
  }
  //Função que os dois filhos herdarão do pai
  public setMenuEdit = ()=>{
    if(this.menuEdit){
      this.menuEdit=false
    }
    else{
      this.menuEdit=true;
    }
   return this.menuEdit;
  }
}
