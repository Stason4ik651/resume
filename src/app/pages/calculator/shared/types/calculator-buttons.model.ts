import { ActionsEnum } from './actions.enum';
import { NumericsEnum } from './numerics.enum';
import { OperationsEnum } from './operations.enum';

export class CalculatorButtonsModel {
  private _correctOrder = [
    ActionsEnum.Clear,
    ActionsEnum.Backspace,
    ActionsEnum.Percent,
    OperationsEnum.Divide,
    NumericsEnum.Seven,
    NumericsEnum.Eight,
    NumericsEnum.Nine,
    OperationsEnum.Multiply,
    NumericsEnum.Four,
    NumericsEnum.Five,
    NumericsEnum.Six,
    OperationsEnum.Minus,
    NumericsEnum.One,
    NumericsEnum.Two,
    NumericsEnum.Three,
    OperationsEnum.Plus,
    ActionsEnum.Negative,
    NumericsEnum.Zero,
    NumericsEnum.Dot,
    ActionsEnum.Equal,
  ];
  get correctOrder() {
    return this._correctOrder;
  }
}
