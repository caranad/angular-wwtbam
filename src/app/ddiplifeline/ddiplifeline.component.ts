import { Component, OnInit, ElementRef } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-ddiplifeline',
  templateUrl: './ddiplifeline.component.html',
  styleUrls: ['./ddiplifeline.component.css']
})
export class DdiplifelineComponent implements OnInit {

  public element: ElementRef;
  
  constructor(private app: GameComponent, private el: ElementRef) {
    this.element = el;
  }

  executeLifeline() {
    this.element.nativeElement.style.display = "none";
    this.app.setDoubleDip(true);
    this.app.pauseBGM();
    this.app.playBGM(this.app.getCurrentQuestion());
  }

  ngOnInit() {
  }

  playDoubleDipSound() {
    var audio = new Audio();
    audio.src = "../../assets/sound/dd1.wav"
    audio.load();
    audio.play();
  }

  playDoubleDipWrong() {
    var audio = new Audio();
    audio.src = "../../assets/sound/ddwrong.wav"
    audio.load();
    audio.play();
  }
}
