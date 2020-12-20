const takeFromInterval = (arr, firstValue, secondValue) => {
  const selectElems = (item) => {
    if (typeof firstValue !== 'number' || typeof secondValue !== 'number') {
      return;
    } else if (firstValue > secondValue) {
      return (item >= secondValue && item <= firstValue);
    }
    return (item >= firstValue && item <= secondValue);
  }
  return arr.filter(selectElems);
};

const array = [1, 2, 3, 4, 5];

const newArray = takeFromInterval(array, 2, 4);
console.log(newArray); // [2, 3, 4]

const reverseValuesArray = takeFromInterval(array, 5, 3);
console.log(reverseValuesArray); // [3, 4, 5]

const anotherArray = takeFromInterval(array, 2, {});
console.log(anotherArray); // []

const yetAnotherArray = takeFromInterval(array, true, null);
console.log(yetAnotherArray); // []