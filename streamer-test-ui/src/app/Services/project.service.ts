import { Course, ProjectUpdate, ProjectBase } from './../Models/Project';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from '../Models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly Api = "http://192.168.0.16:5000/api"

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Project[]>(`${this.Api}/project`)
  }
  listById(id:string){
    return this.http.get<Project>(`${this.Api}/project/${id}`)
  }
  listCourses(){
    return this.http.get<Course[]>(`${this.Api}/course`);
  }
  listByCourseId(id:string){
    return this.http.get<Project[]>(`${this.Api}/project/course_id/${id}`)
  }
  update(req:Project){
    return this.http.put<ProjectUpdate>(`${this.Api}/project`,req);
  }
  create(req:ProjectBase){
    return this.http.post<ProjectBase>(`${this.Api}/project`,req)
  }
  delete(id:string){
    return this.http.delete(`${this.Api}/project/${id}`)
  }
}
