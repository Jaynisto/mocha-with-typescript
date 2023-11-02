import GreetIn from './interfaces/greetin';
import { language } from './enums/language'

export class Greeter {
    private greetLanguages : Map< language, GreetIn>
    constructor(greetLanguages : Map< language, GreetIn>){
        this.greetLanguages = greetLanguages;
    }

    greet(name: string, chosenLanguage : language){
        let greetIn = this.greetLanguages.get(chosenLanguage);
        if(greetIn){
            return greetIn.greet(name)
        }
        return "";
    }
}