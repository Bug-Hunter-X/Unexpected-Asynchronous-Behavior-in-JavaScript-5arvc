function myFunc() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('This will run after 1 second');
    }, 1000);
  });
}

async function main(){
const result = await myFunc();
console.log(result); //This will log 'This will run after 1 second' after the 1 second delay
}
main();