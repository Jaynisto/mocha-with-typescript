import GreetIn from './greetin'

// GreetInAfrikaans.ts
export default class GreetInAfrikaans implements GreetIn {
    greet(name: string): string {
        return `Goeie more, ${name}!`;
    }
}
