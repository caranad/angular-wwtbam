import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  public audio: any;

  constructor() {
    var x = this;

    setTimeout(function() {
      x.audio = new Audio();
      x.audio.src = "../../assets/sound/wwtbam_main.mp3";
      x.audio.load();
      x.audio.play();
    }, 2000);
   }

  ngOnInit() {

  }

  goToGame(num: number) {
    if (num < 1 && num > 25) {
      alert("Please pick a number that's between 1 and 25.");
    }
    else {
      this.audio.src = "../../assets/sound/letsplay/2000s.wav";
      this.audio.load();
      this.audio.play();

      this.audio.onended = function() {
        window.location.href = "/game/" + num;
      }
    }
  }
}
