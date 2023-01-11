import {Component, Input, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {Portifolio} from 'src/app/model/portifolio';
import {PortifolioService} from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contato';

  @Input()
  public bgcolor: boolean = false;

  private portifolio: Portifolio = new Portifolio;

  constructor(private portifolioService: PortifolioService, private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.$gaService.pageView('#contact', 'Contato');

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

  getPortifolio(): Portifolio {
    return this.portifolio;
  }

  getCareerStart(): string {
    var eventStartTime = new Date(this.portifolio.careerStart).getFullYear();
    var eventEndTime = new Date(Date.now()).getFullYear();
    var duration = eventEndTime - eventStartTime;

    return duration.toString();
  }

  getBirthday(): string {
    var eventStartTime = new Date(this.portifolio.birthday).getFullYear();
    var eventEndTime = new Date(Date.now()).getFullYear();
    var birthday = eventEndTime - eventStartTime;

    return birthday.toString();
  }

}
