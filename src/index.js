
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = matrix.map((element, index) => {
    if (index % 2 !== 0) {
      return element.reverse();
    } else {
      return element;
    }
  })
  let str = arr.join(',');
  let newarr = str.split(',').map(Number);
  return newarr;
}
