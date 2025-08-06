import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHeader } from '../layout/layout-header/layout-header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LayoutHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('amazing-animal-paintings');   
}
