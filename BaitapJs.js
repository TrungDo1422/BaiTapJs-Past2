//bai 1
function SoDuong(array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] >= 0) return i + ' ' + array[i];
  return 'No result';
}

//bai 2
let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

// bai 3
function name(users) {
  return (infoUser = users.map((user) => ({
    fullName: `${user.name} ${user.id}`,
    id: user.id,
  })));
}

//bai 4
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
console.log(unique(values)); // Hare, Krishna, :-O
