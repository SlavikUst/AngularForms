import { Component, OnInit } from '@angular/core';
import {Memoize} from 'typescript-memoize';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  private counter: string;

  constructor() {
    this.counter = 'counter';
  }

  ngOnInit(): void {
  }


  @Memoize((param: string, param2: string) => param + param2)
  toggleOptAnimation(param: string, param2: string): string {
    console.log('23')
    return `${this.counter} ${param} ${param2}`;
  }
}
