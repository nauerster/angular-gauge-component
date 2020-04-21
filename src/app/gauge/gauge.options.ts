export class GaugeOptions {

  public label: string;
  public value: string | number;
  public percentage: number;
  public size: 'small' | 'medium' | 'large' = 'medium';
  public color: 'danger' | 'warning' | 'success' | 'neutral' | 'custom' | 'info' = 'info';
  public bgColor: string;
  public clickable: boolean;
  public disabled: boolean;
  public emitEvent: boolean;

  constructor(opts: Partial<GaugeOptions>) {

    Object.assign(this, opts);

  }
}
