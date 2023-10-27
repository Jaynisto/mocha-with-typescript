import GreetIn from "../interfaces/greetin";

export default class GreetInSotho implements GreetIn {
    greet(name: string): string {
        return `Dumela, ${name}!`;
    }
}