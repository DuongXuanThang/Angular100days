import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

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
        margin-top: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgessBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {
    // console.log({
    //   progeress: this.progress,
    //   backgroundColor: this.backgroundColor,
    //   progressColor: this.progressColor,
    // });
  }
  ngOnInit(): void {
    console.log({
      progeress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({
      changes,
      progeress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
