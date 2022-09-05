import { Component, OnInit, } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { FormationCourse } from 'src/app/model/formationCourse';
import { Portifolio } from 'src/app/model/portifolio';
import { PortifolioService } from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-courseformation',
  templateUrl: './courseformation.component.html',
  styleUrls: ['./courseformation.component.css']
})
export class CourseformationComponent implements OnInit {

  private portifolio: Portifolio = new Portifolio;

  public config: PaginationInstance = {
    id: 'courseformationComponent',
    itemsPerPage: 6,
    currentPage: 1
  };

  public iconSize: number = 70;

  constructor(private portifolioService: PortifolioService) {

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

  ordernar(a: FormationCourse, b: FormationCourse) {
    if (a.conclusion > b.conclusion) {
      return -1;
    }
    if (a.conclusion < b.conclusion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  obterCursos(): FormationCourse[] {
    return this.portifolio.formationCourse.sort(this.ordernar);
  }

  absoluteIndex(indexOnPage: number): number {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + indexOnPage + 1;
  }

}
