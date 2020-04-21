export class GaugeMapper {

  public static mapGaugeClasses(options: any,
                                disabled: boolean,
                                clickable: boolean): Array<any> {

    const output = [];
    const classes = {
      size: this.getSize(options.size),
      color: this.getColor(options.color)
    };

    for (const prop in classes) {
      if (classes.hasOwnProperty(prop) && classes[prop] !== undefined && classes[prop] != null) {
        output.push(classes[prop]);
      }
    }

    /**
     * Add/Remove disabled class from instance
     */
    if (disabled) {
      output.push('--disabled');
    } 
    else {
      const index = output.indexOf('--disabled');
      if (index > -1) {
        output.splice(index, 1);
      }
    }

    /**
     * Add/Remove clickable class from instance
     */
    if (clickable) {
      output.push('--clickable');
    } 
    else {
      const index = output.indexOf('--clickable');
      if (index > -1) {
        output.splice(index, 1);
      }
    }

    return output;

  }

  /**
   * Map inbound gauge size
   */
  public static getSize(size: string): any {

    let output: any;

    switch (size) {
      case 'small':
        output = '--sm';
        break;
      case 'large':
        output = '--lg';
        break;
      default :
        output = '--md';
    }

    return output;

  }

  /**
   * Map inbound gauge color
   */
  public static getColor(color: string): any {

    let output: any;

    switch (color) {
      case 'neutral':
        output = '--neutral';
        break;
      case 'success':
        output = '--success';
        break;
      case 'warning':
        output = '--warning';
        break;
      case 'danger':
        output = '--danger';
        break;
      case 'custom':
        output = '--custom';
        break;
      default :
        output = '--info';
    }

    return output;

  }

  // public static setGaugeValue(value : string | number, character? : any) : string {

  //   let char = character ? character : '%';

  //   if (value == null || value == undefined) {
  //     return;
  //   }

  //   if (typeof value === 'string') {
  //     return `${value}${char}`;
  //   }
  //   else {
  //     return `${value}`;
  //   }

  // }
}
