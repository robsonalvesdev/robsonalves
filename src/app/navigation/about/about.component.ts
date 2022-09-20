import { Component, Input, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { About } from 'src/app/model/about';
import { Portifolio } from 'src/app/model/portifolio';
import { PortifolioService } from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'Sobre';

  @Input() 
  public bgcolor: boolean = false;

  private portifolio: Portifolio = new Portifolio;

  public myDate = Date.now();

  constructor(private portifolioService: PortifolioService, private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.$gaService.pageView('#about', 'Sobre');

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

  getAbout(): About[] {
    return this.portifolio.about;
  }

  getCarrerStart(): Date {
    return this.portifolio.careerStart;
  }

  getCareerTime(): string {
    var eventStartTime = new Date(this.portifolio.careerStart).getFullYear();
    var eventEndTime = new Date(Date.now()).getFullYear();
    var duration = eventEndTime - eventStartTime;

    return duration.toString();
  }

}
