/* Angular Import */
import { 
  Component, 
  AfterViewInit, 
  Input, 
  Output, 
  EventEmitter }                      from '@angular/core';
/* Gauge Imports */
import { GaugeOptions }               from './gauge.options';
import { GaugeMapper }                from './gauge.mapper';


@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
  host: {
    class: 'app-gauge'
  }
})
export class GaugeComponent implements AfterViewInit {

  /**
   * Standup build options
   */
  @Input('options')
    public options: GaugeOptions = new GaugeOptions ({
      label: 'label',
      value: '25%',
      percentage: 25,
      size: 'medium',
      color: 'info',
      bgColor: null,
      clickable: false,
      disabled: false,
      emitEvent: false
    });

  /**
   * Allows the nested gauge component to raise an event and pass
   * changed data to it's consumer.
   */
  @Output('trigger')
    public triggerEvent: EventEmitter<any>;

  /**
   * Targets the inner gauge selector
   * Ref: '<oux-gauge> <div class="gauge"> </div> </oux-gauge>'
   */
  // @ViewChild(GaugeContainerDirective, { read : ElementRef })
  //   private gauge;

  ////////////////////////////////////////////////
  // Dependency Injection
  ////////////////////////////////////////////////

  constructor() {
    this.triggerEvent = new EventEmitter();
  }

  ////////////////////////////////////////////////
  // Lifecycle Hooks
  ////////////////////////////////////////////////

  ngAfterViewInit(): void {

    this.setClassOptions();

  }

  /**
   * Set optional gauge classes
   */
  public setClassOptions(): Array<any> {

    const classes = {
      size: this.options.size,
      color: this.options.color
    };

    return GaugeMapper.mapGaugeClasses(classes, this.options.disabled, this.options.clickable);

  }

  /**
   * Can be used to pass the gauges label value to the consumer when clicked.
   * Ex: Toggle the show/hide value of another element or component.
   */
  public whenClicked(value: string, event: any): void {

    // Prevent click event if not clickable
    if (!this.options.clickable) {
      event.stopPropagation();
      event.preventDefault();
    }

    // If emitEvent is true
    if (this.options.emitEvent === true) {
      this.emitEventData(value);
    }

  }

  /**
   * If emitEvent is true,
   */
  private emitEventData(value: string): void {
    /**
     * We leverage event binding to emit our changes
     * and pass the new value to the consumer.
     */
    this.triggerEvent.emit(value);
  }

}