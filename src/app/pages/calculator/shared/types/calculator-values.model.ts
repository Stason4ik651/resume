import { OperationsEnum } from './operations.enum';

export class CalculatorValuesModel {
  private _first = '0';

  private _second = '';

  private _operator = '';

  get first() {
    return this._first;
  }

  get second() {
    return this._second;
  }

  get operator() {
    return this._operator;
  }

  set operator(operator) {
    this._operator = operator;
  }

  get displayValue() {
    return this._first + ' ' + this._operator + ' ' + this._second;
  }

  get currentOperandValue() {
    return this._operator ? this._second : this._first;
  }

  set currentOperandValue(value) {
    if (this._operator) this._second = value;
    else this._first = value;
  }

  equal() {
    if (!this._operator) return;

    if (this._second !== '') {
      const first = parseFloat(this._first);
      const second = parseFloat(this._second);

      switch (this._operator) {
        case OperationsEnum.Plus:
          this._first = String(first + second);
          break;
        case OperationsEnum.Minus:
          this._first = String(first - second);
          break;
        case OperationsEnum.Multiply:
          this._first = String(first * second);
          break;
        case OperationsEnum.Divide:
          if (second === 0) this._first = `You can't divide by zero!`;
          else this._first = String(first / second);
          break;
        default:
          throw new Error(`Can't find operator "${this._operator}"`);
      }
      if (!(this._first === `You can't divide by zero!`)) this.convertResult();
      this._second = '';
      this._operator = '';
    }
  }

  clearAll() {
    this._first = '0';
    this._second = '';
    this._operator = '';
  }

  backspace() {
    console.log('xui');
    if (this._second !== '') {
      this._second = this._second.slice(0, -1);
    } else if (this._operator !== '') {
      this._operator = '';
    } else {
      if (this.invalidNumber()) this._first = '0';

      this._first = this._first.slice(0, -1);
      if (this._first === '') this._first = '0';
    }
  }

  percent() {
    if (this._second !== '')
      this._second = String(parseFloat(this._second) / 100);
    else {
      this._first = String(parseFloat(this._first) / 100);
      this._operator = '';
    }
  }

  negateNumber() {
    if (this._operator)
      this._second =
        this._second !== '' ? String(parseFloat(this._second) * -1) : '';
    else this._first = String(parseFloat(this._first) * -1);
  }

  private invalidNumber() {
    return /[^0-9.\-e+]/.test(this._first);
  }

  private convertResult() {
    const buffer = this._first
      .toLocaleString()
      .replace(',', '.')

      .replace(new RegExp(' ', 'g'), '');
    this._first =
      buffer.length > 10 ? Number(buffer).toExponential(3).toString() : buffer;
  }
}
