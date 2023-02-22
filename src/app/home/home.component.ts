import { Component } from '@angular/core';
import * as math from 'mathjs';
import { evaluate } from 'mathjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  darkMode: boolean = false;
  toshow = '0';
  currvalue = '';
  sonuc = '';
  deger = '';
  history: Array<string> = [];
  hiddenHistory: boolean = true;
  writeToScreen(value: string) {
    this.currvalue = this.currvalue + value;
    this.toshow = this.currvalue;
    this.deger += value;
  }
  equals() {
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
    this.sonuc = this.currvalue;
    this.history.push(this.deger + '=' + this.sonuc);
    this.deger = '';
    console.log(this.history);
  }
  clear() {
    this.currvalue = '';
    this.toshow = this.currvalue;
    this.sonuc = '';
  }
  darkLightMode(secim: string) {
    if (secim === 'true') {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  }
  setHiddenHistory(value: boolean) {
    this.hiddenHistory = value;
    console.log(value);
  }
}
