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

  observable = new Observable<boolean | null | undefined>(subiscribe =>
    subiscribe.next(
      navigator.userAgent.match(/Android/i) != undefined
      || navigator.userAgent.match(/webOS/i) != undefined
      || navigator.userAgent.match(/iPhone/i) != undefined
      || navigator.userAgent.match(/iPad/i) != undefined
      || navigator.userAgent.match(/iPod/i) != undefined
      || navigator.userAgent.match(/BlackBerry/i) != undefined
      || navigator.userAgent.match(/Windows Phone/i) != undefined
      || window.innerWidth <= 990
  ));

  private isMobile: boolean | null | undefined;
  
  private observer = {
    next: (isMobile: boolean | null | undefined) => this.isMobile = isMobile,
    error: (erro: any) => console.log(erro),
    complete: () => console.log("Não foi possível definir tipo de dispositivo.")
  }

  detectar_mobile() {
    this.observable.subscribe(this.observer);
    return this.isMobile;
  }

}
