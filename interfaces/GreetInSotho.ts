import GreetIn from "./greetin";


export default class GreetInSotho implements GreetIn {
    greet(name: string): string {
        return `Dumela, ${name}!`;
    }
}