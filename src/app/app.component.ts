import { HeaderComponent } from './header/header.component';
import { Component, ViewChild,OnInit,AfterViewInit} from '@angular/core';
import { Router,ActivatedRoute,UrlSegment,NavigationEnd, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild(HeaderComponent) header: HeaderComponent;
  title = 'app';
  open = false;
  header:string=' ';
  

  themes = [{
    name: 'dark-pink',
    baseColor: '#e91e63',
    isActive: false
  }, {
    name: 'light-green',
    baseColor: '#57b2f8',
    isActive: true
  }];

  constructor( private route:Router ,private activatedRoute:ActivatedRoute){  
    

  }
  ngOnInit(){   

    this.route.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {               
        let split = event.url.split('/').length
        let currentUrlPath = event.urlAfterRedirects.split('/')[split-1];
        console.log('URL_PATH: ', currentUrlPath); 
        this.header = currentUrlPath ;  
      }
      
    });
  }

  
    onIconMenu() {
      this.open = !this.open;
    }

    changeTheme(themeName:string){
      this.themes.forEach((theme)=>{
        this.removeClass(document.body, theme.name);
        theme.isActive = false;
        if(theme.name=== themeName){
          theme.isActive = true;
        }
      })

      this.addClass(document.body, themeName);
    }

    removeClass(el, className) {
    if (!el || el.length === 0)
      return;
    if (!el.length) {
      el.classList.remove(className);
    } else {
      for (var i = 0; i < el.length; i++) {
        el[i].classList.remove(className)
      }
    }
  }
  addClass(el, className) {
    if (!el)
      return;
    if (!el.length) {
      el.classList.add(className);
    } else {
      for (var i = 0; i < el.length; i++) {
        el[i].classList.add(className);
      }
    }
  }




  }
