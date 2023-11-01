import UserGreetCounter  from '../interfaces/userGreetounter'

export default class GreetCounter implements UserGreetCounter {
    private greetCounts: Record<string, number> = {};
  
    countGreet(firstName: string): void {
      if (this.greetCounts[firstName]) {
        this.greetCounts[firstName]++;
      } else {
        this.greetCounts[firstName] = 1;
      }
    }
  
    get greetCounter(): number {
      return Object.keys(this.greetCounts).length;
    }
  
    userGreetCount(firstName: string): number {
      return this.greetCounts[firstName] || 0;
    }
}
  