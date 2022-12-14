import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PaginationInstance} from 'ngx-pagination';
import {Course} from 'src/app/model/course';
import {Portifolio} from 'src/app/model/portifolio';
import {PortifolioService} from 'src/app/service/portifolio.service';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'Course';

  @Input()
  public bgcolor: boolean = false;
  public config: PaginationInstance = {
    id: 'courseComponent',
    itemsPerPage: 6,
    currentPage: 1
  };
  filterInst: string = "";
  filterCategory: string = "";
  public iconSize: number = 70;
  private portifolio: Portifolio = new Portifolio;

  constructor(private portifolioService: PortifolioService, private route: ActivatedRoute, private $gaService: GoogleAnalyticsService) {

  }

  ngOnInit(): void {
    this.$gaService.pageView('#courses', 'Cursos');

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
    return this.portifolio.course.sort((a, b) => {
      return <any>new Date(b.conclusion) - <any>new Date(a.conclusion);
    }).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()) && p.tags.some(xx => xx.toLowerCase().startsWith(this.filterCategory.toLowerCase())));
    //}).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()) && p.tags[0].toLowerCase().startsWith(this.filterCategory.toLowerCase()));
    //return this.portifolio.course.sort(this.ordernar).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
  }

  obterTags(): string[] {
    let cursos: string[] = [];
    this.portifolio.course.forEach(x => x.tags.forEach(xx => cursos.push(xx)));
    return Array.from(new Set(cursos.map((item: any) => item)));
  }

  obterInstitutions(): string[] {
    //of(this.portifolio.course).pipe(distinct(({institution})) => institution)).subscribe(x => )
    const unique = [...new Set(this.portifolio.course.map(item => item.institution))];
    return unique.sort();
  }

  obterCategorias(): string[] {
    //of(this.portifolio.course).pipe(distinct(({institution})) => institution)).subscribe(x => )
    let categ: string[] = [];
    this.portifolio.course.forEach(c => c.tags.forEach(t => categ.push(t.toLowerCase())));
    const unique = [...new Set(categ.map(x => x))];
    return unique.sort();
  }


  absoluteIndex(indexOnPage: number): number {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + indexOnPage + 1;
  }

  AtualizaFiltro(valor: string) {
    this.filterInst = valor;
    this.config.currentPage = 1;
  }

  AtualizaFiltroCategoria(valor: string) {
    this.filterCategory = valor;
    this.config.currentPage = 1;
  }

}
