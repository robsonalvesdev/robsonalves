import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


@HostListener('window:resize')
export class NavbarComponent implements OnInit { 

  //@HostListener('window:resize', [])

  activeFragment: Observable<string | null>;
  scroll: boolean = true;
  resize: boolean = false;


  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeFragment = this.route.fragment.pipe(frag => frag);
    //this.activeFragment = this.route.fragment.pipe(share());
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
    if (this.detectar_mobile())
      this.resize = false
    else
      this.resize = true //= !this.resize;
  }

  detectar_mobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      || window.innerWidth <= 990
      //|| document.getElementById("botaomenu")?.style.visibility === 'visible'
    ) {
      return true;
    }
    else {
      return false;
    }
  }

}
