function threeSum(arr, target) {
  var sum = 0;
for(var i=0;i<arr.length;i++){
  sum= sum+arr[i];
  if(sum == target){
  return sum;
}
}
}

module.exports = threeSum;