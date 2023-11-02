import IsWeekdayIn from "../interfaces/isWeekdayIn";
import { Days } from "../enums/day";

export default class WeekdayChecker implements IsWeekdayIn {
  isWeekday(day: string): boolean {
    let results;
    if(day.includes(Days.Monday)){
        results =  true
    }else if(day.includes(Days.Tuesday)){
        results = true
    }else if(day.includes(Days.Wednesday)){
        results = true
    }else if(day.includes(Days.Thursday)){
        results = true
    }else if(day.includes(Days.Friday)){
        results = true
    }else{
        results = false
    }

    return results;
  }
}
