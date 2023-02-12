import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ``, // Viet cac th trong nay luon
  // 1 component: teampalte Url quan trong nhat
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List Posts';
  isDanger = false;
  isWarning = false;
  classes="box red-border yellow-background";
  // UserId - id - title - body
  posts = [
    {
      id: 1,
      userId: "012",
      title: "AVC",
      post: "ABCD"
    },
    {
      id: 2,
      userId: "023",
      title: "ABC",
      post: "avcxcc"
    },
    {
      id: 3,
      userId: "024",
      title: "xc",
      post: "admin"
    }
  ]
}
