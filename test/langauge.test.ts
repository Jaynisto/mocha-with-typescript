import  assert  from 'assert'
import GreetIn  from '../interfaces/greetin'
import GreetInXhosa from '../classes/GreetInXhosa'
import GreetInAfrikaans from '../classes/GreetInAfrikaans'
import GreetInEnglish from '../classes/GreetInEnglish'
import GreetInZulu from '../classes/GreetInZulu'
import GreetInSotho from '../classes/GreetInSotho'
import GreetInTswana from '../classes/GreetInTswana'
import GreetInVenda from '../classes/GreetInVenda'
import GreetInJapan from '../classes/GreetInJapan'
import GreetInFrench from '../classes/GreetInFrench'
import GreetInSpanish from '../classes/GreetInSpanish'
import { language } from '../language'
import { Greeter } from '../greet'


describe("GreetInXhosa Function.", () => {
    it("It should return a Xhosa Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.xhosa, new GreetInXhosa());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let xhosaFunction = greeter.greet(userName, language.xhosa)
        assert.equal("Molo, Fanie!", xhosaFunction);
    })
})

describe("GreetInAfrikaans Function.", () => {
    it("It should return an Afrikaans Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.afrikaans, new GreetInAfrikaans());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let afrikaansFunction = greeter.greet(userName, language.afrikaans)
        assert.equal("Goeie more, Fanie!", afrikaansFunction);
    })
})

describe("GreetInEnglish Function.", () => {
    it("It should return an English Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.english, new GreetInEnglish());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let englishFunction = greeter.greet(userName, language.english)
        assert.equal("Hello, Fanie!", englishFunction);
    })
})

describe("GreetInZulu Function.", () => {
    it("It should return a Zulu Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.zulu, new GreetInZulu());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let zuluFunction = greeter.greet(userName, language.zulu)
        assert.equal("Sawubona, Fanie!", zuluFunction);
    })
})

describe("GreetInSotho Function.", () => {
    it("It should return a Sotho Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.sesotho, new GreetInSotho());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let sothoFunction = greeter.greet(userName, language.sesotho)
        assert.equal("Dumela, Fanie!", sothoFunction);
    })
})

describe("GreetInTswana Function.", () => {
    it("It should return a Tswana Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.tswana, new GreetInTswana());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let tswanaFunction = greeter.greet(userName, language.tswana)
        assert.equal("Dumela, Fanie!", tswanaFunction);
    })
})

describe("GreetInVenda Function.", () => {
    it("It should return a Venda Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.venda, new GreetInVenda());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let vendaFunction = greeter.greet(userName, language.venda)
        assert.equal("Ndaa, Fanie!", vendaFunction);
    })
})

describe("GreetInJapanese Function.", () => {
    it("It should return a Japanese Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.japanese, new GreetInJapan());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let japaneseFunction = greeter.greet(userName, language.japanese)
        assert.equal("Konnichiwa, Fanie!", japaneseFunction);
    })
})

describe("GreetInFrench Function.", () => {
    it("It should return a French Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.french, new GreetInFrench());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let frenchFunction = greeter.greet(userName, language.french)
        assert.equal("Bonjour, Fanie!", frenchFunction);
    })
})

describe("GreetInSpanish Function.", () => {
    it("It should return a Spanish Greeting.", () => {
        let greetMap = new Map<language, GreetIn>()
        greetMap.set(language.spanish, new GreetInSpanish ());

        let greeter = new Greeter(greetMap)
        const userName = "Fanie"
        let spanishFunction = greeter.greet(userName, language.spanish)
        assert.equal("¡Hola, Fanie!", spanishFunction);
    })
})
