import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  @HostListener('window:resize')

  activeFragment = this.route.fragment.pipe(share());
  scroll: boolean = true;
  resize: boolean = false;


  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true);
  }

  scrolling = (s: any) => {

    let sc = window.scrollY;

    if (sc === 0) {
      this.scroll = true
    }
    else {
      this.scroll = false
    }
  }

  onResize(event: any) {
    this.resize = !this.resize;
  }

  detectar_mobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

}
