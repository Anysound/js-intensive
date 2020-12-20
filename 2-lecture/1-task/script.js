// объявление функции
const deepCopy = (obj) => {
  const resultObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      resultObj[key] = deepCopy(obj[key]);
      continue;
    }
    resultObj[key] = obj[key];
  }
  return resultObj;
};

// объект для копирования
const copyObj = {
  a: 23,
  b: {
    c: 'value'
  }
};

// создаем новый объект и меняем значение свойства
const newObj = deepCopy(copyObj);

newObj.b.c = 'anotherValue';

// проверяем, что объекты действительно разные
console.log(`copyObj.b.c: ${copyObj.b.c}, newObj.b.c: ${newObj.b.c}`);
console.log(copyObj.b.c === newObj.b.c) // false