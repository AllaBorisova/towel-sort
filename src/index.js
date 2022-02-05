
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  if ((typeof(matrix) == "undefined") || (matrix.length==0)) {
    return [];
  }
  
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
