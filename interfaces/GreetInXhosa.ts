import GreetIn from "./greetin";

// GreetInXhosa.ts
export default class GreetInXhosa implements GreetIn {
    greet(name: string): string {
        return `Molo, ${name}!`;
    }
}