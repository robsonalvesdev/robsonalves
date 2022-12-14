import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from 'src/environments/environment';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robsonalves';

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.ga, {'page_path': event.urlAfterRedirects});
      }
    })
  }
}
