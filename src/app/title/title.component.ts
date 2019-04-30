import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() {
    setTimeout(function() {
      var audio = new Audio();
      audio.src = "../../assets/sound/wwtbam_main.mp3";
      audio.load();
      audio.play();

      console.log(audio.play());
    }, 2000);
   }

  ngOnInit() {

  }

  goToGame(num: number) {
    if (num < 1 && num > 25) {
      alert("Please pick a number that's between 1 and 25.");
    }
    else {
      window.location.href = "/game/" + num;
    }
  }
}
