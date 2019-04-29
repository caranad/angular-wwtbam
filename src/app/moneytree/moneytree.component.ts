import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moneytree',
  templateUrl: './moneytree.component.html',
  styleUrls: ['./moneytree.component.css']
})
export class MoneytreeComponent implements OnInit {
  q_numbers: Tree[];
  @Input() currentValue: number;

  constructor() {
    this.q_numbers = [
      {"question": 15, "value": "1 MILLION"},
      {"question": 14, "value": "500,000"},
      {"question": 13, "value": "250,000"},
      {"question": 12, "value": "125,000"},
      {"question": 11, "value": "64,000"},
      {"question": 10, "value": "32,000"},
      {"question": 9, "value": "16,000"},
      {"question": 8, "value": "8,000"},
      {"question": 7, "value": "4,000"},
      {"question": 6, "value": "2,000"},
      {"question": 5, "value": "1,000"},
      {"question": 4, "value": "500"},
      {"question": 3, "value": "300"},
      {"question": 2, "value": "200"},
      {"question": 1, "value": "100"},
    ]
   }

   getMoneyTree() {
     return this.q_numbers;
   }

  ngOnInit() {
  }

}

interface Tree {
  question: number,
  value: string
}
