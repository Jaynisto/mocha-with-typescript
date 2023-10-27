import  assert  from 'assert'
import GreetIn  from '../interfaces/greetin'
import GreetInXhosa from '../interfaces/GreetInXhosa'
import GreetInAfrikaans from '../interfaces/GreetInAfrikaans'
import GreetInEnglish from '../interfaces/GreetInEnglish'
import GreetInZulu from '../interfaces/GreetInZulu'
import GreetInSotho from '../interfaces/GreetInSotho'
import GreetInTswana from '../interfaces/GreetInTswana'
import GreetInVenda from '../interfaces/GreetInVenda'
import GreetInJapan from '../interfaces/GreetInJapan'


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
