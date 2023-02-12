import {Component, Input, OnChanges, OnInit} from "@angular/core";

@Component({
  selector: "progress-bar",
  template: `
        <div
          class="progress-bar-container"
          [style.backgroundColor]="backgroundColor"
        >
        <div
          class="progress"
          [style]="{
              backgroundColor: progressColor,
              width: progress + '%'
          }"
        >
        </div>
        </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `
  ]
})

export class ProgressBarComponent implements OnInit, OnChanges{
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  // Typescript
  // 1 Class always have 1 constructor
  constructor() {}
  // ngOnInit run ca 2
  // ngChange bine => Luon Luon thay doi khi ta change cac gia tren Input
  // ngChange thuong lam vidatetion
  ngOnInit() {
    console.log({progress: this.progress, backgroundColor: this.backgroundColor, progressColor: this.progressColor});
  }
  //
  ngOnChanges() {
    console.log({progress1: this.progress, backgroundColor1: this.backgroundColor, progressColor1: this.progressColor});
  }
}
