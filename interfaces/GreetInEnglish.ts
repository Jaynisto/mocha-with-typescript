import GreetIn from "./greetin";

// GreetInEnglish.ts
export default class GreetInEnglish implements GreetIn {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}
