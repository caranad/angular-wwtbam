import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { DdiplifelineComponent } from '../ddiplifeline/ddiplifeline.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ans',
  templateUrl: './ansoption.component.html',
  styleUrls: ['./ansoption.component.css'],
  providers: [DdiplifelineComponent]
})
export class AnsoptionComponent implements OnInit {
  @Input() choice: string;
  @Input() correct: boolean;
  @Input() letter: string;

  public element: ElementRef;
  public audio: any;
  public numTaps: number;

  constructor(private app: GameComponent, private router: Router, private el: ElementRef, private dd: DdiplifelineComponent) { 
    this.element = el;
    this.audio = new Audio();
    this.numTaps = 2;
  }

  ngOnInit() {
  }

  getNativeElement() {
    return this.element;
  }

  seeAnswer() {
    
  }

  checkAnswer() {
    if (this.choice != " ") {
      if (this.numTaps == 0) {
        this.numTaps = 2;

        this.getNativeElement().nativeElement.style.pointerEvents = "none";
        this.getNativeElement().nativeElement.querySelector("b").style.color = "";
        this.getNativeElement().nativeElement.style.backgroundColor = ""; 

        setTimeout(() => {
          this.app.getNextQuestion();
          this.app.unblockQuestion();
          this.app.unblockLifelines(); 
        }, 2000);
      }
      else if (this.numTaps == 2) {
        this.numTaps--;

        this.getNativeElement().nativeElement.style.backgroundColor = "orange";
        this.getNativeElement().nativeElement.querySelector("b").style.color = "black";

        // Block any other choice from being pickable except the one you chose
        this.app.blockQuestions();

        // Block lifelines 
        this.app.blockLifelines();

        if (this.app.isDoubleDip()) {
          // Play double dip final answer sound
          this.dd.playDoubleDipSound();
          this.app.pauseBGM();
        }
        else {
          if (this.app.getCurrentQuestion() > 4) {
            this.app.pauseBGM();
            this.audio.loop = false;
            this.playSound(this.app.getCurrentQuestion());
          }
        }
      }
      else if (this.numTaps == 1) {
        this.numTaps--;
  
        if (this.correct) {
          this.playCorrectSound(this.app.getCurrentQuestion());
          this.app.showWinCash();
          this.getNativeElement().nativeElement.style.backgroundColor = "lime";
          this.getNativeElement().nativeElement.querySelector("b").style.color = "orange";
          this.app.setDoubleDip(false);
        }
        else {
          if (this.app.isDoubleDip()) {
            this.numTaps = 2;
            this.choice = " ";
            this.app.setDoubleDip(false);
            this.dd.playDoubleDipWrong();
            this.app.unblockQuestion();
            this.app.unblockLifelines();
            this.app.playBGM(this.app.getCurrentQuestion());

            this.getNativeElement().nativeElement.style.backgroundColor = "";
            this.getNativeElement().nativeElement.querySelector("b").style.color = "";
          }
          else {
            this.getNativeElement().nativeElement.style.backgroundColor = "orange";
            this.app.highlightCorrectAnswer();
            this.app.getTotalPrize();
  
            this.app.pauseBGM();
            this.playWrongSound(this.app.getCurrentQuestion());
          
            setTimeout(() => {
              this.router.navigate(["/prize"]);
            }, 10000);
          }
        }
      }
    }
  }

  playSound(question: number) {
    if (question == 5 || question == 10) {
      this.audio.src = "../../assets/sound/final/2000f.wav"
    }
    else if (question == 6 || question == 11) {
      this.audio.src = "../../assets/sound/final/4000f.wav"
    }
    else if (question == 7 || question == 12) {
      this.audio.src = "../../assets/sound/final/8000f.wav"
    }
    else if (question == 8 || question == 13) {
      this.audio.src = "../../assets/sound/final/16000f.wav"
    }
    else if (question == 9 || question == 14) {
      this.audio.src = "../../assets/sound/final/32000f.wav"
    }

    if (this.audio.src != "" || this.audio.src != undefined) {
      this.audio.load();
      this.audio.play();
    }
  }

  playCorrectSound(question: number) {
    if (question < 4) {
      this.audio.src = "../../assets/sound/correct/100-500.wav"
    }
    else if (question == 4) {
      this.app.pauseBGM();
      this.audio.src = "../../assets/sound/correct/1000.wav"
    }
    else if (question == 5) {
      this.audio.src = "../../assets/sound/correct/2000.wav"
    }
    else if (question == 6) {
      this.audio.src = "../../assets/sound/correct/4000.wav"
    }
    else if (question == 7) {
      this.audio.src = "../../assets/sound/correct/8000.wav"
    }
    else if (question == 8) {
      this.audio.src = "../../assets/sound/correct/16000.wav"
    }
    else if (question == 9) {
      this.app.pauseBGM();
      this.audio.src = "../../assets/sound/correct/32000.wav"
    }
    else if (question == 10) {
      this.audio.src = "../../assets/sound/correct/64000.wav"
    }
    else if (question == 11) {
      this.audio.src = "../../assets/sound/correct/125000.wav"
    }
    else if (question == 12) {
      this.audio.src = "../../assets/sound/correct/250000.wav"
    }
    else if (question == 13) {
      this.audio.src = "../../assets/sound/correct/500000.wav"
    }
    else if (question == 14) {
      this.audio.src = "../../assets/sound/correct/1000000.mp3"
      this.app.celebratoryLighting();
    }

    this.audio.load();
    this.audio.play();

    this.audio.onended = () => {
      if (this.app.getCurrentQuestion() < 15) {
        this.app.updateLighting(this.app.getCurrentQuestion());
        this.playLetsPlaySound(this.app.getCurrentQuestion());
      }
    }
  }

  playLetsPlaySound(question: number) {
    if (question == 4 || question == 9) {
      this.audio.src = "../../assets/sound/letsplay/2000s.wav"
    }
    else if (question == 5 || question == 10) {
      this.audio.src = "../../assets/sound/letsplay/4000s.wav"
    }
    else if (question == 6 || question == 11) {
      this.audio.src = "../../assets/sound/letsplay/8000s.wav"
    }
    else if (question == 7 || question == 12) {
      this.audio.src = "../../assets/sound/letsplay/16000s.wav"
    }
    else if (question == 8 || question == 13) {
      this.audio.src = "../../assets/sound/letsplay/32000s.wav"
    }
    else {
      this.audio.src = "";
    }

    this.audio.loop = false;
    this.audio.load();
    this.audio.play();

    this.audio.onended = () => {
      this.audio.src = "";
    }
  }

  playWrongSound(question: number) {
    if (question < 5) {
      this.audio.src = "../../assets/sound/wrong/100-500w.wav"
    }
    else if (question == 5 || question == 10) {
      this.audio.src = "../../assets/sound/wrong/2000w.wav"
    }
    else if (question == 6 || question == 11) {
      this.audio.src = "../../assets/sound/wrong/4000w.wav"
    }
    else if (question == 7 || question == 12) {
      this.audio.src = "../../assets/sound/wrong/8000w.wav"
    }
    else if (question == 8 || question == 13) {
      this.audio.src = "../../assets/sound/wrong/16000w.wav"
    }
    else if (question == 9) {
      this.audio.src = "../../assets/sound/wrong/32000w.wav"
    }
    else if (question == 14) {
      this.audio.src = "../../assets/sound/wrong/1000000w.wav"
    }

    this.audio.load();
    this.audio.play();
  }
}

