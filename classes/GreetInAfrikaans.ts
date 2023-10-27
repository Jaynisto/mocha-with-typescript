import GreetIn from '../interfaces/greetin'

export default class GreetInAfrikaans implements GreetIn {
    greet(name: string): string {
        return `Goeie more, ${name}!`;
    }
}
