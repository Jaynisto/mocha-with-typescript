import * as assert from 'assert';
import { WeekdayMapper } from '../isWeekdays';
import { Days } from '../enums/day';
import  WeekdayChecker  from '../classes/IsWeekday';
import IsWeekdayIn  from '../interfaces/isWeekdayIn'

describe('WeekdayMapper', () => {
  it('should return true for a weekday', () => {
    const weekdayCheckers = new Map<Days, IsWeekdayIn>();
    weekdayCheckers.set(Days.Monday, new WeekdayChecker()); 

    const weekdayMapper = new WeekdayMapper(weekdayCheckers);

    const isWeekday = weekdayMapper.isWeekday('Monday', Days.Monday);
    assert.strictEqual(isWeekday, true);
  });

  it('should return false for a non-weekday', () => {
    const weekdayCheckers = new Map<Days, IsWeekdayIn>();
    weekdayCheckers.set(Days.Monday, new WeekdayChecker()); 

    const weekdayMapper = new WeekdayMapper(weekdayCheckers);

    const isWeekday = weekdayMapper.isWeekday('Saturday', Days.Saturday);
    assert.strictEqual(isWeekday, false);
  });
});
