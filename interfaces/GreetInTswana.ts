import GreetIn from "./greetin";


export default class GreetInTswana implements GreetIn {
    greet(name: string): string {
        return `Dumela, ${name}!`;
    }
}