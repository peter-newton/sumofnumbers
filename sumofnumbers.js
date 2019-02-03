function sumFor(data) {
  const total = [];
  for (let i = 0; i < data; i++) {
    total.push(i);
  }
}
console.log(sumFor(1, 2, 3));

function sumWhile(data) {
  const total2 = [];
  let i = 0;
  while (i < data) {
    total2.push(i);
    i++;
  }
}
console.log(sumWhile(1, 2, 3));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  function add(i) {
    console.log(data[i]);
    if (i === data.length - 1) {
      return data[i];
    }
    return data[i] + add(data, i + 1);
  }
  return add(data, 0);
}
console.log(sumRecursion(1, 2, 3));

function sumTheSimpleWay(data) {
  const sum = _.reduce(data, function (memo, num) { return memo + num; }, 0);
  return sum;
}
console.log(sumTheSimpleWay(1, 2, 3));
