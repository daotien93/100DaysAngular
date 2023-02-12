import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List Posts';
  isDanger = false;
  isWarning = false;
  classes="box red-border yellow-background";

  currentProgress = 70;
}
