import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter: {{counter}}</h1><h1></h1>
  <hr>

  <button class="btn btn-secondary me-1" (click)="increaseBY(-1)">-1</button>
  <button class="btn btn-secondary me-1" (click)="resetCounter()">Reset</button>
  <button class="btn btn-secondary"(click)="increaseBY(+1)">+1</button>
  <hr>


  `,
})
export class CounterComponent {

  public counter: number = 0;

  increaseBY(value:number):void{

    this.counter += value;
  }

  resetCounter(){

    this.counter = 0

    };
  }


