import { HeaderComponent } from './header/header.component';
import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  title = 'app';
  open = false;

  themes = [{
    name: 'dark-pink',
    baseColor: '#e91e63',
    isActive: false
  }, {
    name: 'light-green',
    baseColor: '#57b2f8',
    isActive: true
  }];

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
