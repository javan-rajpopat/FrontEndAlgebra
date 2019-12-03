import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabSelected = undefined;
  current:string = undefined;

  constructor(private location: Location) { 
    this.current = new 
    URL(window.location.href).pathname.split('/').filter(Boolean).pop();;
  }

  onClick(tab: number){
    if(tab === 1){
      this.location.replaceState('/independent/home/' + this.current);
      this.tabSelected = 1;
      location.reload();
    }else if (tab === 2){
      this.location.replaceState('/independent/practice/' + this.current);
      this.tabSelected = 3;
      location.reload();
    }else if (tab === 3){
      this.location.replaceState('/independent/problemBank/' + this.current);
      this.tabSelected = 3;
      location.reload();
    }else if (tab === 4){
      this.location.replaceState('/independent/introVideo/' + this.current);
      this.tabSelected = 4;
      location.reload();
    }else if (tab === 5){
      this.location.replaceState('/independent/unitOverView/' + this.current);
      this.tabSelected = 5;
      location.reload();
    }else if (tab === 6){
      this.location.replaceState('/independent/examples/' + this.current);
      this.tabSelected = 6;
      location.reload();
    }else if (tab === 7){
      this.location.replaceState('/independent/quiz/' + this.current);
      this.tabSelected = 7;
      location.reload();
    }
  }
}
