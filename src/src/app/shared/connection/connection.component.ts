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
  fontSize: number;
  constructor() {}

  ngOnInit(): void {
    if (this.RandLocation) {
      this.generateNewLocation();
      setInterval(() => {
        this.setAccessories(0);
        setTimeout(() => {
          this.generateNewLocation();
          this.fontSize = Math.floor(Math.random() * 11) + 6;
          this.setAccessories(1);
        }, 1500);
      }, Math.floor(Math.random() * 10000) + 2000);
    }
  }

  private generateNewLocation(): void {
    let random = Math.floor(Math.random() * 70) + 20;
    this.top = random + '%';
    this.right = random + '%';
  }

  private setAccessories(opacity: number): void {
    this.fontSize = Math.floor(Math.random() * 11) + 6;
    this.opacity = opacity;
  }
}
