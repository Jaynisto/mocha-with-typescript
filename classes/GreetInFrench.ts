import GreetIn from "../interfaces/greetin";

export default class GreetInFrench implements GreetIn {
    greet(name: string): string {
        return `Bonjour, ${name}!`;
    }
}