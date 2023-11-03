import TransportFeeIn from "./interfaces/transportFeeIn";
import { Shifts } from "./enums/shift";

export class ShiftMapper {
    private shiftChecker: Map<Shifts, TransportFeeIn>;

    constructor(shiftChecker: Map<Shifts, TransportFeeIn>) {
        this.shiftChecker = shiftChecker;
    }

    transportShift(shift: string, chosenShift: Shifts): string {
        if (this.shiftChecker.has(chosenShift)) {
            const transportFeeInInstance = this.shiftChecker.get(chosenShift);
            if (transportFeeInInstance) {
                return transportFeeInInstance.transportFee(shift);
            } else {
                return "Shift mapping not found.";
            }
        } else {
            return "Shift not found in the mapping.";
        }
    }
}
