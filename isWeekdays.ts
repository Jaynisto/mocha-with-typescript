import IsWeekdayIn from "./interfaces/isWeekdayIn";
import { Days } from "./enums/day";

export class WeekdayMapper {
  private weekdayCheckers: Map<Days, IsWeekdayIn>;

  constructor(weekdayCheckers: Map<Days, IsWeekdayIn>) {
    this.weekdayCheckers = weekdayCheckers;
  }

  isWeekday(day: string, chosenDay: Days): boolean {
    const weekdayChecker = this.weekdayCheckers.get(chosenDay);
    if (weekdayChecker) {
      return weekdayChecker.isWeekday(day);
    }
    return false;
  }
}

