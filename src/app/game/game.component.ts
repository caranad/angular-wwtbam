import { Component, ElementRef } from '@angular/core';
import { MoneytreeComponent } from '../moneytree/moneytree.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [MoneytreeComponent]
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

  public qa: QuestionAnswers[];

  constructor(private el: ElementRef, private mtree: MoneytreeComponent) {
    this.letters = ["A", "B", "C", "D"];
    this.doubledip = false;
    
    this.qa = [
      {
        "question": "What is 1+1?",
        "answers": ["1", "2", "3", "4"],
        "correct": 1,
        "fifty": [0, 3]
      },
      {
        "question": "What color is Pikachu?",
        "answers": ["Yellow", "Green", "Blue", "Red"],
        "correct": 0,
        "fifty": [2, 3]
      },
      {
        "question": "Most people in Europe belong to what religion?",
        "answers": ["Judaism", "Islam", "Christianity", "Zorostrianism"],
        "correct": 2,
        "fifty": [2, 3]
      },
      {
        "question": "What name is given to someone who is skeptical of the policies of the European Union?",
        "answers": ["Eurosceptic", "Eurovision", "Eurostar", "Eurotrash"],
        "correct": 0,
        "fifty": [2, 3]
      },
      {
        "question": "The capital of France is what?",
        "answers": ["Bourges", "Nantes", "Strasbourg", "Paris"],
        "correct": 3,
        "fifty": [0, 1]
      },
      {
        "question": "Which of these is the name of Han Solo's spaceship in Star Wars?",
        "answers": ["Millenium Eagle", "Millenium Vulture", "Millenium Condor", "Millenium Falcon"],
        "correct": 3,
        "fifty": [0, 1]
      },
      {
        "question": "The seat of the Church of England is in which city?",
        "answers": ["London", "Salisbury", "Canterbury", "Oxford"],
        "correct": 2,
        "fifty": [1, 3]
      },
      {
        "question": "Charles Ingram was associated with a Millionaire cheating scandal in which year?",
        "answers": ["2000", "2001", "2002", "2003"],
        "correct": 1,
        "fifty": [2, 3]
      },
      {
        "question": "Jove is another name for which Roman god?",
        "answers": ["Neptune", "Jupiter", "Uranus", "Saturn"],
        "correct": 1,
        "fifty": [0, 2]
      },
      {
        "question": "Which Hindu god looks like an elephant?",
        "answers": ["Vishnu", "Hanuman", "Shiva", "Ganesh"],
        "correct": 3,
        "fifty": [0, 2]
      },
      {
        "question": "In the 1984 film 'The Karate Kid', which of these is not the name of a Cobra Kai student?",
        "answers": ["Dutch", "Billy", "Tommy", "Jimmy"],
        "correct": 1,
        "fifty": [2, 3]
      },
      {
        "question": "Which of these World War II battles came first, chronologically?",
        "answers": ["Battle of Okinawa", "D-Day", "Bombing of London", "Operation Barbarossa"],
        "correct": 0,
        "fifty": [2, 3]
      },
      {
        "question": "The 1779 painting, 'The Blue Boy' by Thomas Gainsborough, depicts a boy holding what?",
        "answers": ["Bird", "Hat", "Stick", "Sword"],
        "correct": 1,
        "fifty": [0, 3]
      },
      {
        "question": "The Hussites were a religious sect that emerged in the 15th century, in which country?",
        "answers": ["Poland", "Hungary", "Germany", "Czech Republic"],
        "correct": 3,
        "fifty": [0, 1]
      },
      {
        "question": "Joseph and Marcel Lefebvre worked in the 20th century as what?",
        "answers": ["U.S politicians", "Catholic archbishops", "Television producers", "Business owners"],
        "correct": 1,
        "fifty": [0, 2]
      },
    ]

    this.progress = 0;
    this.totalPrize = "0";

    this.element = el;
    
    this.question = this.qa[this.progress].question;
    this.answers = this.qa[this.progress].answers;
    this.correct = this.qa[this.progress].correct;
    this.fifty = this.qa[this.progress].fifty;

    this.bgm = true;

    this.audio = new Audio();  
    this.audio.src = "../../assets/sound/100-1000.wav"; 

    this.playBGM(this.progress);
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

interface QuestionAnswers {
  question: string;
  answers: string[];
  correct: number;
  fifty: number[];
}