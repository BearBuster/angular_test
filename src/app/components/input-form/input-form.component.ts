import {Component, EventEmitter, Output} from '@angular/core';
import {Client, FirstTaskResult} from "../../app.component";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {

  file: any;
  firstTaskData: Array<Array<number>> = [[]]
  @Output() onMakeResultForFirstTask: EventEmitter<FirstTaskResult> = new EventEmitter<FirstTaskResult>()
  @Output() onMakeResultForSecondTask: EventEmitter<Array<Client>> = new EventEmitter<Array<Client>>()

  inputFile(e){
    this.file = e.target.files[0];
    console.log(this.file)
  }

  task1(){
    let fileReader = new FileReader()
    fileReader.onload = (e) => {

      //Split data
      let tmp = fileReader.result.toString().split('\n')
      tmp.forEach(e => {
        this.firstTaskData.push(e.split(' ').map(Number).slice(1))
      })

      let max_num = Math.max(...this.firstTaskData[0]) * Math.min(...this.firstTaskData[0]);
      let max_index = 0;

      //Calculate
      this.firstTaskData.forEach((e, index) => {
        let tmp_num = Math.max(...e) * Math.min(...e)
        if(max_num < tmp_num){
          max_num = tmp_num
          max_index = index
        }
      })

      const firstTaskResult: FirstTaskResult = {
        arrayIndex: max_index,
        calculationMax: max_num
      }

      this.onMakeResultForFirstTask.emit(firstTaskResult)

      this.firstTaskData = [[]]
    }

    fileReader.readAsText(this.file);
  }

  task2(){
    let fileReader = new FileReader()
    fileReader.onload = (e) =>{
      //split data
      let tmp = fileReader.result.toString().replaceAll(',', '.').split('\n')
      let tmpData: Array<Client> = []

      tmp.forEach((e) => {
        let clientId: number = Number(e.slice(2, 14));
        let bankId: number = Number(e.slice(0, 2))
        let sum: number = Number(e.slice(16))
        let indexOfExistElement = tmpData.findIndex((e) => { return e.idBank === bankId && e.idClient === clientId });
        if(indexOfExistElement == -1){
          tmpData.push({
            idClient: clientId,
            idBank: bankId,
            totalSum: sum
          })
        }else{
          tmpData[indexOfExistElement].totalSum += sum
        }
      })

      this.onMakeResultForSecondTask.emit(tmpData)
    }

    fileReader.readAsText(this.file);
  }

}
