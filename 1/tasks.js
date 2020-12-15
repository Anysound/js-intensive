/*task 1*/
const getNumber = () => {
  const number1 = +prompt('enter first number');
  const number2 = +prompt('enter second number');

    if (number1 && number2) {
      console.log(number1.toString(number2))
    } else {
      throw new Error('some value is not a number')
    }
};
getNumber();

/*task 2*/
const getResult = () => {
  let number1 = +prompt('enter first number');
  let number2 = +prompt('enter second number');
  if (number1 && number2) {
    let value = prompt('some value');
    console.log(value, number1 + number2, number1 / number2);
  } else {
    throw new Error('some value is not a number');
  }
}
getResult();