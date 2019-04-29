import { Component, OnInit, ElementRef } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-fiftylifeline',
  templateUrl: './fiftylifeline.component.html',
  styleUrls: ['./fiftylifeline.component.css']
})
export class FiftylifelineComponent implements OnInit {
  public element: ElementRef;

  constructor(private app: GameComponent, private el: ElementRef) {
    this.element = el;
  }

  executeLifeline() {
    var audio = new Audio();
    audio.src = "../../assets/sound/5050.mp3";
    audio.load();
    audio.play();

    this.element.nativeElement.style.display = "none";

    // Get the fifty-fifty choices. Eliminate 
    var indexes = this.app.getFifty();
    console.log(indexes);

    var answers = this.app.getAnswers();
    console.log(answers);

    indexes.forEach(function(a) {
      answers[a] = " ";
    });
  }

  ngOnInit() {
  }

}
