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

let theGreetInMap : Map<language, GreetIn> = new Map();

theGreetInMap.set(language.afrikaans, new GreetInAfrikaans());
theGreetInMap.set(language.english, new GreetInEnglish());
theGreetInMap.set(language.xhosa, new GreetInXhosa());
theGreetInMap.set(language.japanese, new GreetInJapan());
theGreetInMap.set(language.sesotho, new GreetInSotho());
theGreetInMap.set(language.tswana, new GreetInTswana());
theGreetInMap.set(language.venda, new GreetInVenda());
theGreetInMap.set(language.zulu, new GreetInZulu());
theGreetInMap.set(language.french, new GreetInFrench());
theGreetInMap.set(language.spanish, new GreetInSpanish());

// export function greet(name: string, chosenLanguage: language) {
    
//     let greetIn :GreetIn;

//     if(chosenLanguage === language.afr){
//         greetIn = new GreetInAfrikaans();
//     }
//     else if (chosenLanguage === language.xhosa) {
//         greetIn = new GreetInXhosa();
//     }
//     else{
//         greetIn = new GreetInEnglish();
//     }
    
//     return greetIn.greet(name);
// }