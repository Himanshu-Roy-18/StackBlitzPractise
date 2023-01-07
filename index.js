// run `node index.js` in the terminal
function PrintNumbers() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + ' amazon');
    } else if (i % 3 === 0) {
      console.log(i + ' google');
    } else if (i % 5 === 0) {
      console.log(i + ' facebook');
    } else {
      console.log(i);
    }
  }
}

PrintNumbers();
