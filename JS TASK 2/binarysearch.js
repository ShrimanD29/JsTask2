var binarysearch = function (bin, k, i, j) {
    var mid=Math.floor((i + j)/2);
	
	if (i>j){
    return false;
    }

	if (bin[mid]==k){ 
        return true;	
    }
	if(bin[mid] > k){
		return binarysearch(bin,k,i,mid-1);
    }
	else{
		return binarysearch(bin,k,mid+1,j);
    }
}

var bin=[1,2,3,4,5];
var k=5;

var res1=binarysearch(bin,k,0,bin.length-1)
	console.log(res1)

k = 1;

var res2=binarysearch(bin,k,0,bin.length-1)
	console.log(res2);

k = 7;

var res3=binarysearch(bin,k,0,bin.length-1)
	console.log(res3);