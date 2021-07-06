
export interface Course{
    id:string;
    name:string;
}
export interface ProjectBase{
    name:string;
    image?:string;
    why?:string;
    what?:string;
    whatWillWeDo?:string;
    projectStatus:number;
    courseId:string;
}

export interface Project extends ProjectBase{
    id:string;
    course:Course;
}
export interface ProjectUpdate extends ProjectBase{
    id:string;
}
