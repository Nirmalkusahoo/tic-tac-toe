import {Component} from '@angular/core';
import {SquareComponent} from "../square/square.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-border',
  standalone: true,
  imports: [
    SquareComponent,
    CommonModule
  ],
  templateUrl: './border.component.html',
  styleUrl: './border.component.css'
})
export class BorderComponent {
  public boxes: string[] = []
  public xIsNext: boolean = true;
  public winner: string | null;
  public winnerFormat: number[][] = [];

  constructor() {
    this.init();
  }

  private init(): void {
    this.newGame();
    this.winnerFormat = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  public newGame(): void {
    this.boxes = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  public putValue(i: number) {
    if (!this.boxes[i]) {
      this.boxes.splice(i, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.checkForWinner();
  }

  private checkForWinner(): string | null {
    for (let i = 0; i < this.winnerFormat.length; i++) {
      const [a, b, c] = this.winnerFormat[i];
      if (this.boxes[a] && this.boxes[a] == this.boxes[b] && this.boxes[a] == this.boxes[c]) {
        return this.boxes[a]
      }
    }
    return null;
  }
}
