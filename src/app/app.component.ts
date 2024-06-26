import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SquareComponent} from "./square/square.component";
import {BorderComponent} from "./border/border.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent, BorderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe';
}
