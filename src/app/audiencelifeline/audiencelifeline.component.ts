import { Component, OnInit, ElementRef } from '@angular/core';
import { GameComponent } from '../game/game.component';


@Component({
  selector: 'app-audiencelifeline',
  templateUrl: './audiencelifeline.component.html',
  styleUrls: ['./audiencelifeline.component.css']
})
export class AudiencelifelineComponent implements OnInit {

  public element: ElementRef;
  
  constructor(private el: ElementRef, private app: GameComponent) {
    this.element = el;
  }

  executeLifeline() {
    var x = this;

    this.app.pauseBGM();
    this.element.nativeElement.style.display = "none";

    var audio = new Audio();
    audio.src = "../../assets/sound/audiencejhol.mp3";
    audio.load();
    audio.play();

    audio.onended = function() {
      audio.loop = true;
      x.app.playBGM(x.app.getCurrentQuestion());
    }
  }

  ngOnInit() {
  }

}
