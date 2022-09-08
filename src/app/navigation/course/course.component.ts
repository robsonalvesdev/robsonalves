import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Course } from 'src/app/model/course';
import { Portifolio } from 'src/app/model/portifolio';
import { PortifolioService } from 'src/app/service/portifolio.service';
import { of, distinct } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  private portifolio: Portifolio = new Portifolio;

  public config: PaginationInstance = {
    id: 'courseComponent',
    itemsPerPage: 6,
    currentPage: 1
  };

  filterInst: string = "";

  public iconSize: number = 70;

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

  obterCursos(): Course[] {
    return this.portifolio.course.sort((a,b) => {
      return <any>new Date(b.conclusion) - <any>new Date(a.conclusion);
    }).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
    //return this.portifolio.course.sort(this.ordernar).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
  }

  obterInstitutions() : string[] {
    //of(this.portifolio.course).pipe(distinct(({institution})) => institution)).subscribe(x => )
    const unique = [...new Set(this.portifolio.course.map(item => item.institution))];
    return unique;
  }


  absoluteIndex(indexOnPage: number): number {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + indexOnPage + 1;
  }

  AtualizaFiltro(valor: string){
    this.filterInst = valor;
    this.config.currentPage = 1;
  }

}
