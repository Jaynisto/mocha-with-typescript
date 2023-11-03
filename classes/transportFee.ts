import TransportFeeIn from "../interfaces/transportFeeIn";
import { Shifts } from "../enums/shift"

export default class MyShifts implements TransportFeeIn {
    transportFee(shift: string): string {
        let results;
        if(shift ===  Shifts.MorningShift){
            results = "R20"
        }else if(shift === Shifts.DayShift){
            results = "R10"
        }else if(shift === Shifts.NightShift){
            results = "free"
        }else{
            results = "You must look for a job"
        }
        return results
    }
}