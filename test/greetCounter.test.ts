import assert from 'assert';
import GreetCounter from '../classes/UserGreetCounter';

describe('GreetCounter', () => {
    const  greetCounter = new GreetCounter();
  

  it('should increment greet count', () => {
    greetCounter.countGreet('Alice');
    greetCounter.countGreet('Bob');
    greetCounter.countGreet('Alice');

    assert.strictEqual(greetCounter.userGreetCount('Alice'), 2);
    assert.strictEqual(greetCounter.userGreetCount('Bob'), 1);
  });

  it('should return the total greet count', () => {
    greetCounter.countGreet('Alice');
    greetCounter.countGreet('Bob');
    greetCounter.countGreet('Alice');

    assert.strictEqual(greetCounter.greetCounter, 2); // Alice and Bob
  });

  it('should handle non-existent users', () => {
    assert.strictEqual(greetCounter.userGreetCount('Eve'), 0);
  });
});
