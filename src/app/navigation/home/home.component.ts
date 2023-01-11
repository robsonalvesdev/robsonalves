import {Component, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';

  constructor(private $gaService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
    this.$gaService.pageView('#home', 'Home');
  }

}
