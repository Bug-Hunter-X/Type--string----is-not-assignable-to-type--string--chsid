function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the function to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}
console.log(greeterArray(user));

// Solution 2:  Use only one element of the array
console.log(greeter(user[0]));