import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private _color: BehaviorSubject<string> = new BehaviorSubject<string>('purple');

  set color(color:string) {
    this._color.next(color);
  }

  get color(): BehaviorSubject<string> {
    return this._color;
  }
}
