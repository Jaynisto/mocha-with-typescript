import GreetIn from "../interfaces/greetin";

export default class GreetInEnglish implements GreetIn {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}
