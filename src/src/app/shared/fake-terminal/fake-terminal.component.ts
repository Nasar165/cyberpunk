import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-terminal',
  templateUrl: './fake-terminal.component.html',
  styleUrls: ['./fake-terminal.component.scss'],
})
export class FakeTerminalComponent implements OnInit {
  commands = [
    'sudo chmod 777 ~/',
    'sft xerxcore@2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    'get ~/porsos',
    'connection to 2001:0db8:85a3:0000:0000:8a2e:0370:7334 closed',
    'sudo chmod -x ~/porsos',
    'sudo sh ./porsos',
    'Initializing porsos script ....',
  ];
  constructor() {}

  ngOnInit(): void {}
}
