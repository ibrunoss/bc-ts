navigator.clipboard.readText().then(console.log).catch(console.log);

navigator.clipboard
  .writeText("Hello Word!")
  .then(console.log)
  .catch(console.log);
