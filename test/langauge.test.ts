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


describe("My Xhosa Greeting Function.", () => {
    it("It should return a Xhosa Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInXhosa();
        const greeting = greeter.greet(name)
        assert.equal("Molo, Fanie!", greeting);
    })
})

describe("My Afrikaans Greeting Function.", () => {
    it("It should return an Afrikaans Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInAfrikaans();
        const greeting = greeter.greet(name)
        assert.equal("Goeie more, Fanie!", greeting);
    })
})

describe("My English Greeting Function.", () => {
    it("It should return an English Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInEnglish();
        const greeting = greeter.greet(name)
        assert.equal("Hello, Fanie!", greeting);
    })
})

describe("My Zulu Greeting Function.", () => {
    it("It should return a Zulu Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInZulu();
        const greeting = greeter.greet(name)
        assert.equal("Sawubona, Fanie!", greeting);
    })
})

describe("My Sotho Greeting Function.", () => {
    it("It should return a Sotho Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInSotho();
        const greeting = greeter.greet(name)
        assert.equal("Dumela, Fanie!", greeting);
    })
})

describe("My Tswana Greeting Function.", () => {
    it("It should return a Tswana Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInTswana();
        const greeting = greeter.greet(name)
        assert.equal("Dumela, Fanie!", greeting);
    })
})

describe("My Venda Greeting Function.", () => {
    it("It should return a Venda Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInVenda();
        const greeting = greeter.greet(name)
        assert.equal("Ndaa, Fanie!", greeting);
    })
})



describe("My Japanese Greeting Function.", () => {
    it("It should return a Japanese Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInJapan();
        const greeting = greeter.greet(name)
        assert.equal("Konnichiwa, Fanie!", greeting);
    })
})

describe("My French Greeting Function.", () => {
    it("It should return a French Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInFrench();
        const greeting = greeter.greet(name)
        assert.equal("Bonjour, Fanie!", greeting);
    })
})

describe("My Spanish Greeting Function.", () => {
    it("It should return a Spanish Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInSpanish();
        const greeting = greeter.greet(name)
        assert.equal("¡Hola, Fanie!", greeting);
    })
})
