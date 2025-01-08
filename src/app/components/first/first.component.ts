import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  public data: string = 'Lorem ipsum dolor sit amet....'
  public color: string = 'blue';

  constructor(
    private colorService: ColorService
  ){}

  ngOnInit(): void {
    this.colorService.color.subscribe( data => {
      this.color = data;
    } )
  }
}
