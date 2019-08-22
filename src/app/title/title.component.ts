import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TweenLite } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @ViewChild('titleImage') titleImg: ElementRef;

  public audio: any;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.audio = new Audio();
      this.audio.src = "../../assets/sound/wwtbam_main.mp3";
      this.audio.load();
      this.audio.play();

      TweenLite.to(
        this.titleImg.nativeElement, 5, { opacity: 1 }
      );
    }, 2000);
  }

  goToGame(num: number) {
    if (num < 1 && num > 25) {
      alert("Please pick a number that's between 1 and 25.");
    }
    else {
      this.audio.src = "../../assets/sound/letsplay/2000s.wav";
      this.audio.load();
      this.audio.play();

      this.audio.onended = () => {
        this.router.navigate(["/game/", num]);
      }
    }
  }
}
