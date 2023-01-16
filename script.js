function threeSum(arr, target) {
	  let closet = Number.MAX_SAFE_INTEGER;
	let ans = 0;
	for(let i = 0;i<arr.length -2 ; i++){
		for(let j = i+1 ; j < arr.length - 1; j++){
			for(let k = j+1; k< arr.length; k++){
				ans = arr[i]+arr[j]+arr[k];
				if(ans === target){
					return ans
				}else if(Math.abs(ans - target) < Math.abs(closet - target)){
					closet = ans;
				}
			}
		}
	}
	return closet
}

module.exports = threeSum;