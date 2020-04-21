/* Angular Imports */
import { Component } from '@angular/core';
/* Gauge Imports */
import { GaugeOptions } from './gauge/gauge.options';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  /** Set standard gauge build options */
  public config : GaugeOptions = new GaugeOptions({
    label: 'Funded',
    value: '75%',
    percentage: 75,
    size: 'medium',
    color: 'info',
    bgColor: '#FBFCFC',
    clickable: false,
    disabled: false,
    emitEvent: false
  });

  ////////////////////////////////////////////////
  // Dependency Injection
  ////////////////////////////////////////////////

  constructor() {}

  ////////////////////////////////////////////////
  // Lifecycle Hooks
  ////////////////////////////////////////////////

  ngOnInit() : void {}

  ////////////////////////////////////////////////
  // Feature Methods
  ////////////////////////////////////////////////


}
