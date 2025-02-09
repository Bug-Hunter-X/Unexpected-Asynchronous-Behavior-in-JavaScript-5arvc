function myFunc() {
  setTimeout(() => {
    console.log('This will run after 1 second');
  }, 1000);

  return 'I returned immediately';
}

const result = myFunc();
console.log(result); //This logs 'I returned immediately' before the setTimeout function executes.