import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit ():void{
    document.body.style.backgroundColor = "rgba(81, 131, 205, 0.165)";
  }
}
