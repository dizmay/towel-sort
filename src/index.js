
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if(matrix === undefined || matrix.length === 0) {
  	return []
  }
	let pos = 1;
  let interval = 2;
  while(pos < matrix.length) {
    matrix[pos].reverse();
    pos += interval;
  }
  return matrix.join(',').split(',')
}
