import GreetIn from './interfaces/greetin';
import { language } from './language'
import GreetInEnglish from './classes/GreetInEnglish'
import GreetInAfrikaans from './classes/GreetInAfrikaans';
import GreetInXhosa from './classes/GreetInXhosa';
import GreetInJapan from './classes/GreetInJapan';
import GreetInSotho from './classes/GreetInSotho';
import GreetInTswana from './classes/GreetInTswana';
import GreetInVenda from './classes/GreetInVenda';
import GreetInZulu from './classes/GreetInZulu';
import GreetInFrench from './classes/GreetInFrench';
import GreetInSpanish from './classes/GreetInSpanish';

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