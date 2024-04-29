// Import readline module
const readline = require('readline');

const prompt = 'Welcome to Holberton School, what is your name?\n';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Use interface 'question' to get input from user
rl.question(prompt, (name) => {
  console.log(`Your name is: ${name}`);
  // Close interface
  console.log('This important software is now closing');
  rl.close();
});
