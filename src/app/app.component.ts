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

    onIconMenu() {
      this.open = !this.open;
    }



  }
