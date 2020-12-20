const obj = {
  from: 4,
  to: []
}

obj[Symbol.iterator] = function() {

  // обработка значений ключей, которые не являются числами
  for (let key in obj) {
    if (typeof obj[key] !== 'number') {
      obj[key] = +!!obj[key]; // приведение к числу
    }
  }

  let current = this.from;
  let last = this.to;

  // если значение obj.from больше obj.to, итерируем от obj.to к obj.from
  if (current > last) {
    return {
      next() {
        if (current >= last) {
            return {done: false, value: last++};
        }  else {
          return {done: true}
        }
      }
    }
  }

  return {
    next() {
      if (current <= last) {
          return {done: false, value: current++};
      }  else {
        return {done: true}
      }
    }
  }
}

// работа итератора
const myIterable = obj[Symbol.iterator]();

while(true) {
  let result = myIterable.next();
  if (result.done) break;
  console.log(result.value);
}
