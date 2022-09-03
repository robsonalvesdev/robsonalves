import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Portifolio } from 'src/app/model/portifolio';
import { PortifolioService } from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {


  private portifolio: Portifolio = new Portifolio;

  constructor(private portifolioService: PortifolioService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
      const observableRest = {
        next: (x: Portifolio[]) => this.portifolio = x[0],
        error: (err: any) => console.log(err),
        complete: () => console.log("Ok")
      };     

      const observableFile = {
        next: (x: Portifolio) => this.portifolio = x,
        error: (err: any) => console.log(err),
        complete: () => console.log("Ok")
      };     
      
      this.portifolioService.obterPortifolioFile().subscribe(observableFile);
  }

  ordernar(a: Course, b: Course) {
    if (a.conclusion > b.conclusion) {
      return -1;
    }
    if (a.conclusion < b.conclusion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  obterCursos(): Course[]{
    return this.portifolio.course.sort(this.ordernar);
  }

}
