import { Component, OnInit, ElementRef } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-phonelifeline',
  templateUrl: './phonelifeline.component.html',
  styleUrls: ['./phonelifeline.component.css']
})
export class PhonelifelineComponent implements OnInit {
  public element: ElementRef;
  
  constructor(private el: ElementRef, private app: GameComponent) {
    this.element = el;
  }

  executeLifeline() {
    alert("Phone a friend!");

    var x = this;
    this.element.nativeElement.style.display = "none";

    this.app.pauseBGM();

    var audio = new Audio();
    audio.src = "../../assets/sound/paf.mp3";
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
