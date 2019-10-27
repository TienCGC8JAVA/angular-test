import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  template:
    '<h2>OnInit and OnDestroy</h2>'
  ,
  styles: []
})
export class InfoComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }

  ngOnInit(): void {
    console.log('On init');
  }

}
