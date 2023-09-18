import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActionsEnum } from '../../shared/types/actions.enum';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: [
    '../../shared/styles/base-button.style.css',
    './button-action.component.css',
  ],
})
export class ButtonActionComponent {
  @Input() label!: string;

  constructor(private dataService: DataService) {}

  onButtonClick() {
    switch (this.label) {
      case ActionsEnum.Clear:
        this.dataService.values.clearAll();
        break;
      case ActionsEnum.Backspace:
        this.dataService.values.backspace();
        break;
      case ActionsEnum.Percent:
        this.dataService.values.percent();
        break;
      case ActionsEnum.Negative:
        this.dataService.values.negateNumber();
        break;
      case ActionsEnum.Equal:
        this.dataService.values.equal();
    }
  }

  activeBtnStyle() {
    switch (this.label) {
      case '=':
        return 'equal';
      case '%':
        return 'percent';
      case 'C':
        return 'clear';
      case '←':
        return 'clear';
    }
    return;
  }
}
