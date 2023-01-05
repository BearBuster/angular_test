import { Component } from '@angular/core';

export interface FirstTaskResult{
  arrayIndex: number,
  calculationMax: number
}

export interface Client{
  idBank: number,
  idClient: number,
  totalSum: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _firstTaskResult: FirstTaskResult
  private _secondTaskResult: Array<Client>


  get secondTaskResult(): Array<Client> {
    return this._secondTaskResult;
  }

  set secondTaskResult(value: Array<Client>) {
    this._secondTaskResult = value;
  }

  set firstTaskResult(value: FirstTaskResult) {
    this._firstTaskResult = value;
  }


  get firstTaskResult(): FirstTaskResult {
    return this._firstTaskResult;
  }

  setFirstTask(firstTaskResult: FirstTaskResult){
    this._secondTaskResult = []
    this._firstTaskResult = firstTaskResult
  }

  setSecondTask(secondTaskResult: Array<Client>){
    this._firstTaskResult = null
    this._secondTaskResult = secondTaskResult

    console.log(this._firstTaskResult);
  }
}
