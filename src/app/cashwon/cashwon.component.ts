import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cashwon',
  templateUrl: './cashwon.component.html',
  styleUrls: ['./cashwon.component.css']
})
export class CashwonComponent implements OnInit {
  @Input() winCash: string;

  constructor() { }

  ngOnInit() {
  }

}
