import GreetIn from "./greetin";


export default class GreetInZulu implements GreetIn {
    greet(name: string): string {
        return `Sawubona, ${name}!`;
    }
}