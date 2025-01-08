import { Component } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  public color: string = 'green';

  constructor(
    private colorService: ColorService
  ){}

  public changeColor(color: string): void {
    this.color = color;
    this.colorService.color = color;
  }
}
