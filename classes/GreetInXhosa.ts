import GreetIn from "../interfaces/greetin";

export default class GreetInXhosa implements GreetIn {
    greet(name: string): string {
        return `Molo, ${name}!`;
    }
}