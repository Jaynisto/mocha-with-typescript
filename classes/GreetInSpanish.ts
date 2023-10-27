import GreetIn from "../interfaces/greetin";

export default class GreetInSpanish implements GreetIn {
    greet(name: string): string {
        return `¡Hola, ${name}!`;
    }
}