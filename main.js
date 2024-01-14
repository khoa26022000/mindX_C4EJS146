for (let index = 0; index < 10; index += 2) {
  console.log(index);
}

const arr1 = [2, 5, 10, 24, 1, 6];
let arr2 = [];
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] % 2 === 0) {
    arr2.push(arr1[index]);
  }
}
console.log(arr2);

arr2 = arr1.filter((item) => {
  return item % 2 === 0;
});
