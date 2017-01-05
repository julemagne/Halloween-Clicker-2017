import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: any[] = [
    {text: 'Hello Spooky Friends!', cols: 4, rows: 1, size: '3rem', color: 'white', black: 'black'},
    {text: 'Two', cols: 4, rows: 3, size: '3rem', color: 'lightgreen', black: 'black'},
    {text: 'Three', cols: 2, rows: 1, size: '3rem', color: 'lightpink', black: 'black'},
    {text: 'Four', cols: 2, rows: 1, size: '3rem', color: '#DDBDF1', black: 'black'},
  ];

}
