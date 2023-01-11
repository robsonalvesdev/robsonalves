import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {Portifolio} from 'src/app/model/portifolio';
import {UniversityGraduate} from 'src/app/model/universityGraduate';
import {PortifolioService} from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  title = '(Pós)Graduação';

  @Input()
  public bgcolor: boolean = false;

  private portifolio: Portifolio = new Portifolio;

  constructor(private portifolioService: PortifolioService, private route: ActivatedRoute, private $gaService: GoogleAnalyticsService) {

  }

  ngOnInit(): void {
    this.$gaService.pageView('#universityformation', '(Pós)Graduação');

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

  ordernar(a: UniversityGraduate, b: UniversityGraduate) {
    if (a.conclusionYear > b.conclusionYear) {
      return -1;
    }
    if (a.conclusionYear < b.conclusionYear) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  obterUniversity(): UniversityGraduate[] {
    return this.portifolio.universityGraduate.sort((a, b) => {
      return <any>new Date(b.conclusionYear) - <any>new Date(a.conclusionYear);
    });
    //return this.portifolio.universityGraduate.sort(this.ordernar);
  }

}
