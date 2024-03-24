// Code your solutions in this file
// index.js
const writeCards = (names, message) => {
    return names.map(name => `Thank you, ${name}, for the wonderful ${message} gift!`)
  }
  
  const countDown = (number) => {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = {
    writeCards,
    countDown
  }