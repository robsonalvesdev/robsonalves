import {Component, Input, OnInit,} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {PaginationInstance} from 'ngx-pagination';
import {BookRead} from 'src/app/model/bookRead';
import {Portifolio} from 'src/app/model/portifolio';
import {PortifolioService} from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-bookread',
  templateUrl: './bookread.component.html',
  styleUrls: ['./bookread.component.css']
})
export class BookreadComponent implements OnInit {
  title = 'Leituras';

  @Input()
  public bgcolor: boolean = false;
  public config: PaginationInstance = {
    id: 'bookreadComponent',
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
    this.$gaService.pageView('#bookread', 'Leituras');

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

  ordernar(a: BookRead, b: BookRead) {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  obterLivros(): BookRead[] {
    return this.portifolio.bookRead.sort((a, b) => {
      return <any>new Date(b.title) - <any>new Date(a.title);
    }).filter(p => p.author.some(xx => xx.toLowerCase().startsWith(this.filterInst.toLowerCase())) && p.tags.some(xx => xx.toLowerCase().startsWith(this.filterCategory.toLowerCase())));
    //}).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
    //return this.portifolio.formationCourse.sort(this.ordernar).filter(p => p.institution.toLowerCase().startsWith(this.filterInst.toLowerCase()));
  }

  obterAutores(): string[] {    
    let aut: string[] = [];
    this.portifolio.bookRead.forEach(c => c.author.forEach(t => aut.push(t.toLowerCase())));
    const unique = [...new Set(aut.map(x => x))];
    return unique.sort();
  }

  obterCategorias(): string[] {
    //of(this.portifolio.course).pipe(distinct(({institution})) => institution)).subscribe(x => )
    let categ: string[] = [];
    this.portifolio.bookRead.forEach(c => c.tags.forEach(t => categ.push(t.toLowerCase())));
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
