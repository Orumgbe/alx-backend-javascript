console.log('Welcome to Holberton School, what is your name?');

// Listen for input
process.stdin.on('readable', () => {
  // Read input and write to stdout
  const text = process.stdin.read();
  if (text) {
    process.stdout.write(`Your name is: ${text}`);
  }
});

// Listen for program end
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
