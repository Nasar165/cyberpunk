import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      width: '100%',
      height: '100%',
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: false,
        },
      },
    };
  }
}
