import GreetIn from "../interfaces/greetin";

export default class GreetInJapan implements GreetIn {
    greet(name: string): string {
        return `Konnichiwa, ${name}!`;
    }
}