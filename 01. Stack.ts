/* Stacks! */

// functions: push, pop, peek, length

let letters: string[] = []; // this is our stack

let word: string = "freeCodeCamp";

let rword: string = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
   rword += letters.pop(); 
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}

// Creates a stack
class Stack<T> {
    private count: number = 0;
    private storage: { [key: number]: T } = {};

    // Adds a value onto the end of the stack
    public push(value: T): void {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    public pop(): T | undefined {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    public size(): number {
        return this.count;
    }

    // Returns the value at the end of the stack
    public peek(): T | undefined {
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack<number>();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp"); // This line will result in a TypeScript error because the stack is of type number.
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

