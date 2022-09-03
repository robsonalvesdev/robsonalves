import { About } from "./about";
import { Course } from "./course";
import { FormationCourse } from "./formationCourse";
import { PerfilAcademy } from "./perfilAcademy";
import { UniversityGraduate } from "./universityGraduate";

export class Portifolio {
    name: string = "";
    birthday: Date = new Date();
    email: string = "";
    website: string = "";
    linkedin: string = "";
    github: string = "";
    discord: string = "";
    careerStart: Date = new Date();
    about: About[] = [];
    universityGraduate: UniversityGraduate[] = [];
    formationCourse: FormationCourse[] = [];
    course: Course[] = [];
    perfilAcademy: PerfilAcademy[] = [];    
}