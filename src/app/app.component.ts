import { Component, TemplateRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { OddComponent } from './view/components/odd/odd.component';
import { EventEmitter } from 'stream';
import { EvenComponent } from './view/components/even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0
  interval: any;
  numbers: number[] = [];

  constructor(){}

  startCount(): void {
    this.interval = setInterval(() => {
      this.numbers.push(this.counter);
      this.counter++;
    }, 1000);
  }

  pauseCount(): void {
    clearInterval(this.interval);
  }

  resetCount(): void {
    this.pauseCount();
    this.numbers = [];
  }

  isNumberToBeShownEven(numberToBeShown: number): boolean {
    return numberToBeShown % 2 === 0;
  }
}