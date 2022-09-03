import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { FormationCourse } from 'src/app/model/formationCourse';
import { Portifolio } from 'src/app/model/portifolio';
import { PortifolioService } from 'src/app/service/portifolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private portifolio: Portifolio = new Portifolio;

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

  getAbout(): About[] {
    return this.portifolio.about;
  } 

  getCareerStart(): string {
    var eventStartTime = new Date(this.portifolio.careerStart).getFullYear();
    var eventEndTime = new Date(Date.now()).getFullYear();
    var duration = eventEndTime - eventStartTime;

    return duration.toString();
  }

}
