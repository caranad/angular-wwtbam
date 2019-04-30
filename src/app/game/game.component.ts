import { Component, ElementRef } from '@angular/core';
import { MoneytreeComponent } from '../moneytree/moneytree.component';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [MoneytreeComponent, QuestionService]
})

export class GameComponent {
  public question: string;
  public answers: string[];
  public correct: number;
  public progress: number;
  public totalPrize: string;
  public element: any;
  public letters: string[];
  public fifty: number[];
  public doubledip: boolean;
  public audio: any;
  public winCash: string;
  public bgm: boolean;
  public headers: any;

  public qa: any;

  constructor(private el: ElementRef, private mtree: MoneytreeComponent, private qq: QuestionService) {
    this.letters = ["A", "B", "C", "D"];
    this.doubledip = false;
    
    this.progress = 0;
    this.totalPrize = "0";

    this.element = el;

    this.readQuestionData();

    this.bgm = true;

    this.audio = new Audio();  
    this.audio.src = "../../assets/sound/100-1000.wav"; 

    this.playBGM(this.progress);
  }

  async readQuestionData() {
    this.qa = await this.qq.getQuestions();

    this.question = this.qa[this.progress].question;
    this.answers = this.qa[this.progress].answers;
    this.correct = this.qa[this.progress].correct;
    this.fifty = this.qa[this.progress].fifty;
  }

  setDoubleDip(toggle:boolean) {
    this.doubledip = toggle;
  }

  isDoubleDip() {
    return this.doubledip;
  }

  getAnswers() {
    return this.answers;
  }

  getFifty() {
    return this.fifty;
  }

  getNumQuestionsAnswered() {
    return this.progress;
  }

  blockQuestions() {
    var answers = this.element.nativeElement.querySelectorAll("app-ans");

    for (var i = 0; i < answers.length; i++) {
      if (answers[i].style.backgroundColor != "orange") {
        answers[i].style.pointerEvents = "none";
      }
    }
  }

  blockLifelines() {
    this.element.nativeElement.querySelector(".lifelines").style.pointerEvents = "none";
  }

  unblockQuestion() {
    var answers = this.element.nativeElement.querySelectorAll("app-ans");

    for (var i = 0; i < answers.length; i++) {
      answers[i].style.pointerEvents = "";
    }
  }

  unblockLifelines() {
    this.element.nativeElement.querySelector(".lifelines").style.pointerEvents = "";
  }

  highlightCorrectAnswer() {
    var answers = this.element.nativeElement.querySelectorAll("app-ans");

    answers[this.correct].style.backgroundColor = "lime";
  }

  getNextQuestion() {
    this.element.nativeElement.querySelector(".wwtbam_cash_won").style.display = "none";
    this.progress = this.progress + 1;

    if (this.getNumQuestionsAnswered() < 15) {
      if (this.getNumQuestionsAnswered() >= 5) {
        this.playBGM(this.getNumQuestionsAnswered());
      }
      
      this.question = this.qa[this.progress].question;
      this.answers = this.qa[this.progress].answers;
      this.correct = this.qa[this.progress].correct;
      this.fifty = this.qa[this.progress].fifty;
    }
    else {
      if (this.getCurrentQuestion() == 15) {
        localStorage.setItem("prize", "MILLIONAIRE");
        window.location.href = "/prize";
      }
    }
  }

  showWinCash() {
    var x = this;
    this.winCash = this.mtree.getMoneyTree()[14 - this.progress].value;
    this.element.nativeElement.querySelector(".wwtbam_cash_won").style.display = "block";
  }

  getCurrentQuestion() {
    return this.progress;
  }

  getTotalPrize() {
    var questionsCorrect = this.getCurrentQuestion();

    if (questionsCorrect < 5) {
      localStorage.setItem("prize", "0");
    }
    else if (questionsCorrect >= 5 && questionsCorrect < 10) {
      localStorage.setItem("prize", "1,000");
    }
    else if (questionsCorrect >= 10 && questionsCorrect <= 14) {
      localStorage.setItem("prize", "32,000");
    }
  }

  walkAway() {
    var x = this;

    this.pauseBGM();

    if (this.progress == 0) {
      localStorage.setItem("prize", "0");
    }
    else {
      localStorage.setItem("prize", this.mtree.getMoneyTree()[15 - this.progress].value);
    }

    setTimeout(function() {
      x.highlightCorrectAnswer();

      setTimeout(function() {
        window.location.href = "/prize";
      }, 4000);
    }, 4000);
  }

  pauseBGM() {
    this.audio.pause();
  }

  playBGM(question: number) {
    this.pauseBGM();

    if (this.isDoubleDip()) {
      this.audio.src = "../../assets/sound/ddipbg.mp3"
    }
    else {
      if (question == 5) {
        this.audio.src = "../../assets/sound/2000.wav"
      }
      else if (question == 6) {
        this.audio.src = "../../assets/sound/4000.wav"
      }
      else if (question == 7) {
        this.audio.src = "../../assets/sound/8000.wav"
      }
      else if (question == 8) {
        this.audio.src = "../../assets/sound/16000.wav"
      }
      else if (question == 9) {
        this.audio.src = "../../assets/sound/32000.wav"
      }
      else if (question == 10) {
        this.audio.src = "../../assets/sound/64000.wav"
      }
      else if (question == 11) {
        this.audio.src = "../../assets/sound/125000.wav"
      }
      else if (question == 12) {
        this.audio.src = "../../assets/sound/250000.wav"
      }
      else if (question == 13) {
        this.audio.src = "../../assets/sound/500000.wav"
      }
      else if (question == 14) {
        this.audio.src = "../../assets/sound/MILLION.wav"
      }
      else {
        this.audio.src = "../../assets/sound/100-1000.wav"
      }
    }

    this.audio.loop = true;
    this.audio.load();
    this.audio.play(); 
  }
}