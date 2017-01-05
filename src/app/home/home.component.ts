import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scream:HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    this.scream = new Audio('../assets/audio/scream.mp3');
  }

  playScream = function() {
    // this.scream.play();
  }

}
