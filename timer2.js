const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  console.log("hello" , key.length);
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <=9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  } else if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  process.stdout.write('.');
});

// console.log('after callback');