import { Component } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'composants';
}
