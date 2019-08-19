import { Component, OnInit, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { MoneytreeComponent } from '../moneytree/moneytree.component';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css'],
  providers: [MoneytreeComponent]
})
export class PrizeComponent implements OnInit {
  @Input() points: string;

  public audio: any;

  constructor() { 
    this.points = localStorage.getItem("prize");
    this.audio = new Audio();  
    this.audio.src = "../../assets/sound/endgame.mp3"; 
    this.audio.load();

    setTimeout(() => {
      this.audio.play(); 
    }, 4000);
  }

  ngOnInit() {
  }

}
