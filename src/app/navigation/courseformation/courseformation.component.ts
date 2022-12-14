import {Component, Input, OnInit,} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {PaginationInstance} from 'ngx-pagination';
import {FormationCourse} from 'src/app/model/formationCourse';
import {Portifolio} from 'src/app/model/portifolio';
import {PortifolioService} from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-courseformation',
  templateUrl: './courseformation.component.html',
  styleUrls: ['./courseformation.component.css']
})
export class CourseformationComponent implements OnInit {
  title = 'Cursos de Formação';

  @Input()
  public bgcolor: boolean = false;
  public config: PaginationInstance = {
    id: 'courseformationComponent',
    itemsPerPage: 6,
    currentPage: 1
  };
  public iconSize: number = 70;
  filterInst: string = "";
  filterCategory: string = "";
  private portifolio: Portifolio = new Portifolio;

  constructor(private portifolioService: PortifolioService, private $gaService: GoogleAnalyticsService) {

  }

  ngOnInit(): void {
    this.$gaService.pageView('#courseformation', 'Cursos de Formação');

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
    return this.portifolio.formationCourse.sort((a, b) => {
      return <any>new Date(b.conclusion) - <any>new Date(a.conclusion);
    }).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()) && p.tags.some(xx => xx.toLowerCase().startsWith(this.filterCategory.toLowerCase())));
    //}).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
    //return this.portifolio.formationCourse.sort(this.ordernar).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
  }

  obterInstitutions(): string[] {
    //of(this.portifolio.course).pipe(distinct(({institution})) => institution)).subscribe(x => )
    const unique = [...new Set(this.portifolio.formationCourse.map(item => item.institution))];
    return unique;
  }

  obterCategorias(): string[] {
    //of(this.portifolio.course).pipe(distinct(({institution})) => institution)).subscribe(x => )
    let categ: string[] = [];
    this.portifolio.formationCourse.forEach(c => c.tags.forEach(t => categ.push(t.toLowerCase())));
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
