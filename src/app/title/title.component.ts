import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() {
    this.playAudio();
   }

  ngOnInit() {

  }

  playAudio() {
    var audio = new Audio();
    audio.src = "../../assets/sound/wwtbam_main.mp3";
    audio.load();
    audio.play();
  }
}
