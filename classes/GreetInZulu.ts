import GreetIn from "../interfaces/greetin";

export default class GreetInZulu implements GreetIn {
    greet(name: string): string {
        return `Sawubona, ${name}!`;
    }
}