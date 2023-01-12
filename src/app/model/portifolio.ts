import {About} from "./about";
import {Course} from "./course";
import {FormationCourse} from "./formationCourse";
import {PerfilAcademy} from "./perfilAcademy";
import {UniversityGraduate} from "./universityGraduate";
import {BookRead} from "./bookRead";

export class Portifolio {
  name: string = "";
  birthday: Date = new Date();
  email: string = "";
  website: string = "";
  linkedin: string = "";
  github: string = "";
  discord: string = "";
  careerStart: Date = new Date();
  country: string = "";
  state: string = "";
  city: string = "";
  about: About[] = [];
  universityGraduate: UniversityGraduate[] = [];
  formationCourse: FormationCourse[] = [];
  course: Course[] = [];
  perfilAcademy: PerfilAcademy[] = [];
  bookRead: BookRead[] = [];
}
