import  assert  from 'assert'
import GreetIn  from '../interfaces/greetin'
import GreetInXhosa from '../interfaces/GreetInXhosa'
import GreetInAfrikaans from '../interfaces/GreetInAfrikaans'
import GreetInEnglish from '../interfaces/GreetInEnglish'
import GreetInZulu from '../interfaces/GreetInZulu'
import GreetInSotho from '../interfaces/GreetInSotho'
import GreetInTswana from '../interfaces/GreetInTswana'


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
    it("It should return a Sotho Greeting.", () => {
        const name = "Fanie"
        const greeter : GreetIn = new GreetInTswana();
        const greeting = greeter.greet(name)
        assert.equal("Dumela, Fanie!", greeting);
    })
})