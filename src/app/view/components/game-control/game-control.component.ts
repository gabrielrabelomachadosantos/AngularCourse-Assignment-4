import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startCount = new EventEmitter<any>();
  @Output() pauseCount = new EventEmitter<any>();
  @Output() resetCount = new EventEmitter<any>();

  isCounting: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(): void {
    if (!this.isCounting) {
      this.isCounting = true;
      this.startCount.emit();
    }
  }

  onPause(): void {
    this.isCounting = false;
    this.pauseCount.emit();
  }

  onReset(): void {
    this.isCounting = false;
    this.resetCount.emit();
  }

}
