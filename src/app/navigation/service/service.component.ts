import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.$gaService.pageView('#service', 'Serviços');
  }

}
