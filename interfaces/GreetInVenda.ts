import GreetIn from "./greetin";


export default class GreetInVenda implements GreetIn {
    greet(name: string): string {
        return `Ndaa, ${name}!`;
    }
}
