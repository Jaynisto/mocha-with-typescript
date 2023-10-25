import GreetIn from './interfaces/greetin';
import { language } from './language'
import GreetInEnglish from './interfaces/GreetInEnglish'
import GreetInAfrikaans from './interfaces/GreetInAfrikaans';
import GreetInXhosa from './interfaces/GreetInXhosa';

export function greet(name: string, chosenLanguage: language) {
    
    let greetIn :GreetIn;

    if(chosenLanguage === language.afr){
        greetIn = new GreetInAfrikaans();
    }
    else if (chosenLanguage === language.xhosa) {
        greetIn = new GreetInXhosa();
    }
    else{
        greetIn = new GreetInEnglish();
    }
    
    return greetIn.greet(name);
}