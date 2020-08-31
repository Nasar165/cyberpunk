import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit {
  @Input() title: string;
  @Input() connection: string;
  @Input() RandLocation = false;
  top: string;
  right: string;
  opacity: number;
  constructor() {}

  ngOnInit(): void {
    if (this.RandLocation) {
      this.top = Math.floor(Math.random() * 80) + 20 + '%';
      this.right = Math.floor(Math.random() * 60) + 20 + '%';
      setInterval(() => {
        this.opacity = 0;
        setTimeout(() => {
          this.top = Math.floor(Math.random() * 80) + 20 + '%';
          this.right = Math.floor(Math.random() * 60) + 20 + '%';
          this.opacity = 1;
        }, 1500);
      }, Math.floor(Math.random() * 10000) + 2000);
    }
  }
}
