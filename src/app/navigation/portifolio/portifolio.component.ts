import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {
  title = 'Portifólio';

  constructor(private $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.$gaService.pageView('#portifolio', 'Portifolio');
  }

}
