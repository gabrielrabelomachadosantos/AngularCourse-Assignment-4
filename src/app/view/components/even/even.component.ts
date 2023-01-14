import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OddComponent } from './../odd/odd.component';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() numberToBeShown: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

}
