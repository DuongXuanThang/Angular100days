import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-progess-bar',
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
    ></div>
  </div>
`,

styles: [
  `
    .progress-bar-container,
    .progress {
      height: 20px;
      margin-top:20px;
    }

    .progress-bar-container {
      width: 100%;
    }
  `,
],
})
export class ProgessBarComponent {
progress = 50;
backgroundColor =  '#ccc';
progressColor=  'tomato';


}
