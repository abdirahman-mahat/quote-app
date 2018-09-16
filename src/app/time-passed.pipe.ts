import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date=new Date(); //get the current date and time
let todayDateOnly:any = new Date(today.getFullYear(), today.getMonth(), today.getDate()) //get date without time
var timeMilliseconds= Math.abs(todayDateOnly-value) //get time passed since quote posted in Milliseconds
const fullDaySeconds = 86400; //the number of seconds that make up a full day

var timePassedSeconds= timeMilliseconds*0.001; //converting milliseconds to fullDaySeconds
var daysAfterPost = timePassedSeconds/fullDaySeconds;

if (daysAfterPost>=1){
  return daysAfterPost;
}else{

    return 0;
  }
}
}
